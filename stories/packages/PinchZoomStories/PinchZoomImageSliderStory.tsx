// Caveat: Expo web needs React to be imported
import type {ReactElement} from 'react';
import React from 'react';
import type {ImageProps, ImageSourcePropType} from 'react-native';
import {Animated, Dimensions, Image} from 'react-native';
import styled from '@emotion/native';

import type {PinchZoomRef} from '../../../packages/PinchZoom/lib';
import {PinchZoom} from '../../../packages/PinchZoom/lib';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  padding: 10px;
  background-color: #000;
`;

const ImageSliderContainer = styled.View`
  flex: 1;
  align-self: center;
  width: 300px;
  justify-content: center;
  max-width: ${(): number => Dimensions.get('screen').width}px;
  overflow: hidden;
`;

const images = [
  // IC_LOGO,
  {
    uri: 'https://images.unsplash.com/photo-1519335337423-a3357c2cd12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80',
  },
  {
    uri: 'https://www.housingwire.com/wp-content/uploads/2019/09/Purple-technology-data-internet-3.jpg',
  },
  {
    uri: 'https://images.unsplash.com/photo-1587628736664-fdc50efb57b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    uri: 'https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg',
  },
  {uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'},
];

function AutoHeightImage(
  props: ImageProps & {style: {width: number}},
): React.ReactElement {
  const {style} = props;
  const [heightPerWidth, setHightPerWidth] = React.useState(0);

  return (
    <Image
      {...props}
      style={[style, {height: heightPerWidth * style.width || style.width}]}
      onLoad={({nativeEvent: {source}}): void => {
        if (source && source.width && source.height) {
          setHightPerWidth(source.height / source.width);
        }
      }}
    />
  );
}

const WIDTH = 300;

const PinchZoomImageSliderStory = ({
  imageSources = images,
}: {
  imageSources?: ImageSourcePropType[];
}): ReactElement => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const animValues = React.useRef({
    scale: 1,
    x: 0,
    y: 0,
    nextTranslateX: 0,
    prevTranslateX: 0,
  }).current;

  const pinchZoom = React.useRef<PinchZoomRef>(null);
  const nextImageTranslateX = React.useRef(new Animated.Value(0)).current;
  const prevImageTranslateX = React.useRef(new Animated.Value(0)).current;

  const translateOtherImages = React.useCallback(() => {
    animValues.nextTranslateX =
      ((animValues.scale - 1) * WIDTH) / 2 + animValues.x;

    animValues.prevTranslateX =
      ((1 - animValues.scale) * WIDTH) / 2 + animValues.x;

    nextImageTranslateX.setValue(animValues.nextTranslateX);
    prevImageTranslateX.setValue(animValues.prevTranslateX);
  }, [animValues, nextImageTranslateX, prevImageTranslateX]);

  const onRelease = React.useCallback(() => {
    const moveNext = animValues.nextTranslateX < -WIDTH / 2;
    const movePrev = animValues.prevTranslateX > WIDTH / 2;
    const targetTranslate = pinchZoom.current?.animatedValue.translate;

    if (moveNext && currentIndex < imageSources.length - 1 && targetTranslate) {
      Animated.timing(targetTranslate, {
        toValue: {x: (-(animValues.scale + 1) / 2) * WIDTH, y: animValues.y},
        useNativeDriver: true,
        duration: 300,
      }).start(() => {
        nextImageTranslateX.setValue(0);
        prevImageTranslateX.setValue(0);
        setCurrentIndex(currentIndex + 1);
        pinchZoom.current?.setValues({scale: 1, translate: {x: 0, y: 0}});
      });
    } else if (movePrev && currentIndex > 0 && targetTranslate) {
      Animated.timing(targetTranslate, {
        toValue: {x: ((animValues.scale + 1) / 2) * WIDTH, y: animValues.y},
        useNativeDriver: true,
        duration: 300,
      }).start(() => {
        nextImageTranslateX.setValue(0);
        prevImageTranslateX.setValue(0);
        setCurrentIndex(currentIndex - 1);
        pinchZoom.current?.setValues({scale: 1, translate: {x: 0, y: 0}});
      });
    } else if (animValues.nextTranslateX < 0 && targetTranslate) {
      Animated.timing(targetTranslate, {
        toValue: {x: ((1 - animValues.scale) * WIDTH) / 2, y: animValues.y},
        useNativeDriver: true,
        duration: 300,
      }).start(() => {
        pinchZoom.current?.setValues({
          translate: {
            x: ((1 - animValues.scale) * WIDTH) / 2,
            y: animValues.y,
          },
        });
      });
    } else if (animValues.prevTranslateX > 0 && targetTranslate) {
      Animated.timing(targetTranslate, {
        toValue: {x: ((animValues.scale - 1) * WIDTH) / 2, y: animValues.y},
        useNativeDriver: true,
        duration: 300,
      }).start(() => {
        pinchZoom.current?.setValues({
          translate: {
            x: ((animValues.scale - 1) * WIDTH) / 2,
            y: animValues.y,
          },
        });
      });
    }
  }, [
    animValues.nextTranslateX,
    animValues.prevTranslateX,
    animValues.scale,
    animValues.y,
    currentIndex,
    imageSources.length,
    nextImageTranslateX,
    prevImageTranslateX,
  ]);

  return (
    <Container style={{backgroundColor: '#000'}}>
      <ImageSliderContainer>
        {currentIndex > 0 ? (
          <PinchZoom
            key={`${currentIndex - 1}`}
            style={{
              position: 'absolute',
              width: WIDTH,
              left: -WIDTH,
              top: 0,
              bottom: 0,
              justifyContent: 'center',
              // @ts-ignore
              transform: [{translateX: prevImageTranslateX}],
            }}
          >
            <AutoHeightImage
              source={imageSources[currentIndex - 1]}
              style={{width: WIDTH, bottom: 0}}
              resizeMode="contain"
            />
          </PinchZoom>
        ) : null}
        <PinchZoom
          key={`${currentIndex}`}
          ref={pinchZoom}
          onScaleChanged={(value): void => {
            animValues.scale = value;
            translateOtherImages();
          }}
          onTranslateChanged={(value): void => {
            animValues.x = value.x;
            animValues.y = value.y;
            translateOtherImages();
          }}
          onRelease={onRelease}
          fixOverflowAfterRelease={false}
          style={{
            width: WIDTH,
            justifyContent: 'center',
          }}
        >
          <AutoHeightImage
            source={imageSources[currentIndex]}
            style={{width: WIDTH, bottom: 0}}
            resizeMode="contain"
          />
        </PinchZoom>
        {currentIndex < imageSources.length - 1 ? (
          <PinchZoom
            key={`${currentIndex + 1}`}
            style={{
              width: WIDTH,
              position: 'absolute',
              top: 0,
              bottom: 0,
              justifyContent: 'center',
              left: WIDTH,
              // @ts-ignore
              transform: [{translateX: nextImageTranslateX}],
            }}
          >
            <AutoHeightImage
              source={imageSources[currentIndex + 1]}
              style={{width: WIDTH}}
              resizeMode="contain"
            />
          </PinchZoom>
        ) : null}
      </ImageSliderContainer>
    </Container>
  );
};

export default PinchZoomImageSliderStory;
