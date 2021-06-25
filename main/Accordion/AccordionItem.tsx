import {Animated, Easing, LayoutChangeEvent, ViewStyle} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';

import {Datum} from './index';
import {Icon} from '../Icon';
import styled from '@emotion/native';

const TitleContainer = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${({theme}) => theme.text};
  height: 50px;
  z-index: 10;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const ItemContainer = styled.View`
  background-color: ${({theme}) => theme.background};
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 20px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.textContrast};
  position: absolute;
  left: 20px;
`;

const StyledItem = styled.Text`
  color: ${({theme}) => theme.text};
`;

type ToggleIndicatorType = React.ReactElement | undefined;

interface TranslateYType {
  translateY: Animated.Value;
}
interface Props {
  testID: string;
  datum: Datum;
  shouldAnimate: boolean;
  collapseOnStart: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: React.ReactElement;
  dropDownAnimValueList: Animated.Value;
  sumOfPrecedingTranslateY: TranslateYType[];
  renderTitle?: (item: string) => React.ReactElement;
  renderBody?: (item: string) => React.ReactElement;
  titleContainerStyle?: ViewStyle;
  bodyContainerStyle?: ViewStyle;
}

let layoutHeight = 0;

const AccordionItem: FC<Props> = (props) => {
  const {
    testID,
    datum: item,
    shouldAnimate,
    collapseOnStart,
    animDuration,
    activeOpacity,
    toggleElement,
    dropDownAnimValueList,
    sumOfPrecedingTranslateY,
    renderTitle,
    renderBody,
    titleContainerStyle,
    bodyContainerStyle,
  } = props;

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const [opened, setAnimState] = useState<boolean>(collapseOnStart);
  const [bodyMounted, setBodyMounted] = useState<boolean>(false);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) return;

    const {height} = e.nativeEvent.layout;

    layoutHeight = height;
    setBodyMounted(true);
    setBodyHeight(height);
  };

  const handleAnimState = (): void => {
    setAnimState(!opened);
  };

  const renderDefaultTitle = (title: string): React.ReactElement => {
    return <StyledTitle>{title}</StyledTitle>;
  };

  const renderDefaultBody = (body: string): React.ReactElement => {
    return <StyledItem>{body}</StyledItem>;
  };

  const renderIndicator = (
    // eslint-disable-next-line @typescript-eslint/no-shadow
    toggleElement: ToggleIndicatorType,
  ): React.ReactElement => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          right: 20,
          transform: [
            {
              rotate: rotateAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        }}>
        {toggleElement || <StyledIcon name="chevron-down-light" />}
      </Animated.View>
    );
  };

  useEffect((): void => {
    if (bodyMounted) dropDownAnimValueList.setValue(opened ? -layoutHeight : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyMounted]);

  useEffect((): void => {
    if (shouldAnimate) {
      if (!opened) {
        Animated.timing(dropDownAnimValueList, {
          toValue: 0,
          duration: animDuration || 300,
          useNativeDriver: true,
        }).start();

        return;
      }

      Animated.timing(dropDownAnimValueList, {
        toValue: -bodyHeight,
        duration: animDuration || 300,
        useNativeDriver: true,
      }).start();
    } else {
      const targetValue = opened ? -bodyHeight : 0;

      dropDownAnimValueList.setValue(targetValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  useEffect(() => {
    const targetValue = opened ? 0 : 1;

    if (shouldAnimate)
      Animated.timing(rotateAnimValue, {
        toValue: targetValue,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    else rotateAnimValue.setValue(targetValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'transparent',
          overflow: 'hidden',
          width: 300,
          transform: sumOfPrecedingTranslateY,
        },
      ]}>
      <TitleContainer
        testID={`title_${testID}`}
        onPress={handleAnimState}
        activeOpacity={activeOpacity}
        style={titleContainerStyle}>
        {renderTitle ? renderTitle(item.title) : renderDefaultTitle(item.title)}
        {renderIndicator(toggleElement)}
      </TitleContainer>

      <Animated.View
        testID={`body_${testID}`}
        style={{
          height: !bodyMounted ? undefined : bodyHeight,
          transform: [
            {
              translateY: dropDownAnimValueList,
            },
          ],
        }}
        onLayout={handleBodyLayout}>
        {item.bodies.map((body, key) => {
          return (
            <ItemContainer key={key} style={bodyContainerStyle}>
              {renderBody ? renderBody(body) : renderDefaultBody(body)}
            </ItemContainer>
          );
        })}
      </Animated.View>
    </Animated.View>
  );
};

export default AccordionItem;
