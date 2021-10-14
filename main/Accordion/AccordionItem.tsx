import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';

import {Datum, Styles} from './index';
import {Icon} from '../Icon';
import styled from '@emotion/native';
import {useTheme} from '..';

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
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  datum: Datum;
  collapseOnStart: boolean;
  shouldAnimate: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: React.ReactElement;
  dropDownAnimValueList: Animated.Value;
  sumOfPrecedingTranslateY: TranslateYType[];
  renderTitle?: (item: string) => React.ReactElement;
  renderBody?: (item: string) => React.ReactElement;
}

const AccordionItem: FC<Props> = (props) => {
  const {
    testID,
    datum: item,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration,
    activeOpacity,
    toggleElement,
    dropDownAnimValueList,
    sumOfPrecedingTranslateY,

    styles,
    style,
  } = props;

  const {theme} = useTheme();

  const renderTitle = (title): ReactElement => (
    <StyledTitle theme={theme}>{title}</StyledTitle>
  );

  const renderBody = (body): ReactElement => (
    <StyledItem theme={theme}>{body}</StyledItem>
  );

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const [collapsed, setCollapsed] = useState(collapseOnStart);

  const [bodyMounted, setBodyMounted] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) return;

    const {height} = e.nativeEvent.layout;

    setBodyHeight(height);

    setBodyMounted(true);
  };

  const handlePress = (): void => {
    setCollapsed(!collapsed);
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
      }}
    >
      {element || <StyledIcon theme={theme} name="chevron-down-light" />}
    </Animated.View>
  );

  useEffect(() => {
    if (bodyMounted)
      dropDownAnimValueList.setValue(collapsed ? -bodyHeight : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyMounted]);

  useEffect(() => {
    const targetValue = collapsed ? -bodyHeight : 0;

    if (!shouldAnimate) dropDownAnimValueList.setValue(targetValue);

    Animated.timing(dropDownAnimValueList, {
      toValue: targetValue,
      duration: animDuration || 300,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  useEffect(() => {
    const targetValue = collapsed ? 0 : 1;

    if (!shouldAnimate) rotateAnimValue.setValue(targetValue);

    Animated.timing(rotateAnimValue, {
      toValue: targetValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'transparent',
          overflow: 'hidden',
          width: 300,
          transform: sumOfPrecedingTranslateY,
        },
        style,
      ]}
    >
      <TitleContainer
        theme={theme}
        testID={`title_${testID}`}
        onPress={handlePress}
        activeOpacity={activeOpacity}
        style={styles?.titleContainer}
      >
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
        onLayout={handleBodyLayout}
      >
        {item.bodies.map((body, key) => (
          <ItemContainer key={key} theme={theme} style={styles?.bodyContainer}>
            {renderBody(body)}
          </ItemContainer>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export default AccordionItem;
