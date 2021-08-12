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
    renderTitle = (title) => <StyledTitle>{title}</StyledTitle>,
    renderBody = (body) => <StyledItem>{body}</StyledItem>,
    titleContainerStyle,
    bodyContainerStyle,
  } = props;

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const [opened, setAnimState] = useState<boolean>(collapseOnStart);

  const [bodyMounted, setBodyMounted] = useState<boolean>(false);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  const [layoutHeight, setLayoutHeight] = useState(0);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) return;

    const {height} = e.nativeEvent.layout;

    setLayoutHeight(height);

    setBodyMounted(true);
    setBodyHeight(height);
  };

  const handlePress = (): void => {
    setAnimState(!opened);
  };

  const renderIndicator = (
    element: ToggleIndicatorType,
  ): React.ReactElement => (
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
      {element || <StyledIcon name="chevron-down-light" />}
    </Animated.View>
  );

  useEffect(() => {
    if (bodyMounted) dropDownAnimValueList.setValue(opened ? -layoutHeight : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyMounted]);

  useEffect(() => {
    const targetValue = opened ? -bodyHeight : 0;

    if (!shouldAnimate) dropDownAnimValueList.setValue(targetValue);

    Animated.timing(dropDownAnimValueList, {
      toValue: targetValue,
      duration: animDuration || 300,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  useEffect(() => {
    const targetValue = opened ? 0 : 1;

    if (!shouldAnimate) rotateAnimValue.setValue(targetValue);

    Animated.timing(rotateAnimValue, {
      toValue: targetValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

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
        onPress={handlePress}
        activeOpacity={activeOpacity}
        style={titleContainerStyle}>
        {renderTitle(item.title)}
        {renderIndicator(toggleElement)}
      </TitleContainer>

      <Animated.View
        testID={`body_${testID}`}
        style={{
          height: bodyMounted ? bodyHeight : undefined,
          transform: [
            {
              translateY: dropDownAnimValueList,
            },
          ],
        }}
        onLayout={handleBodyLayout}>
        {item.bodies.map((body, key) => (
          <ItemContainer key={key} style={bodyContainerStyle}>
            {renderBody(body)}
          </ItemContainer>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export default AccordionItem;
