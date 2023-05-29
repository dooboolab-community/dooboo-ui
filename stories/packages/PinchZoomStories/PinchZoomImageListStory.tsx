// Caveat: Expo web needs React to be imported
import type {ReactElement} from 'react';
import React, {useState} from 'react';
import type {ImageSourcePropType} from 'react-native';
import {Dimensions, FlatList, Image} from 'react-native';
import styled from '@emotion/native';

import {PinchZoom} from '../../../packages/PinchZoom/lib';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  padding: 10px;
  background-color: #000;
`;

const ItemContainer = styled.View`
  padding: 10px 0;
  max-width: ${(): number => Dimensions.get('screen').width - 20}px;
  min-height: 200px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
`;

const ContentText = styled.Text`
  font-size: 14px;
  line-height: 19.6px;
`;

const ImageContainer = styled.View`
  background-color: #ccc;
  width: 100%;
  height: 200px;
  align-items: center;
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

interface ImageItemProps {
  source: ImageSourcePropType;
  title: string;
  content: string;
}

function ImageItem({
  source: imageSource,
  title,
  content,
}: ImageItemProps): ReactElement {
  const [width, setWidth] = useState<string | number>('100%');

  return (
    <ItemContainer>
      <TitleText>{title}</TitleText>
      <ContentText>{content}</ContentText>
      <ImageContainer style={{overflow: 'hidden' /** It may be important! */}}>
        <PinchZoom style={{width, height: 200}}>
          <Image
            style={{width, height: 200, backgroundColor: '#fff'}}
            onLoad={({nativeEvent: {source}}): void => {
              if (source && source.width && source.height) {
                setWidth((200 * source.width) / source.height);
              }
            }}
            source={imageSource}
            resizeMode={'contain'}
          />
        </PinchZoom>
      </ImageContainer>
    </ItemContainer>
  );
}

function PinchZoomImageListStory(): ReactElement {
  return (
    <Container>
      <FlatList
        data={images}
        style={{flex: 1}}
        keyExtractor={(item): string => item.uri}
        // @ts-ignore
        renderItem={({item, index}): React.ReactElement => (
          <ImageItem
            source={item}
            title={`Image ${index + 1}`}
            content="This line is for the description of the image"
          />
        )}
      />
    </Container>
  );
}

export default PinchZoomImageListStory;
