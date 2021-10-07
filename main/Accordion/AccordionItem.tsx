import {AccordionBaseProps, TOGGLE_ELEMENT_PROPERTY} from './Accordion';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';

import {Icon} from '../Icon';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

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
  padding: 20px 0px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.textContrast};
  position: absolute;
  padding: 0px 20px;
`;

const StyledItem = styled.Text`
  color: ${({theme}) => theme.text};
  padding: 0px 20px;
`;

export interface AccordionData {
  title: string;
  bodies: string[];
}

interface TranslateYType {
  translateY: Animated.Value;
}

interface Props<T> extends AccordionBaseProps<T> {
  testID: string;
  dropDownAnimValueList: Animated.Value;
  sumOfPrecedingTranslateY: TranslateYType[];
}

type AccordionItemProps = Props<AccordionData>;

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const {theme} = useTheme();

  const {
    testID,
    data: item,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration = 300,
    activeOpacity = 1,
    toggleElement = <StyledIcon name="chevron-down-light" theme={theme} />,
    dropDownAnimValueList,
    sumOfPrecedingTranslateY,
    renderTitle = (title) => <StyledTitle theme={theme}>{title}</StyledTitle>,
    renderBody = (body) => <StyledItem theme={theme}>{body}</StyledItem>,
    styles,
    style,
  } = props;

  const {
    titleContainer = {backgroundColor: theme.primary},
    bodyContainer = {backgroundColor: theme.background},
  } = styles ?? {};

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const [collapsed, setCollapsed] = useState(collapseOnStart);

  const [bodyMounted, setBodyMounted] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) {
      return;
    }

    const {height} = e.nativeEvent.layout;

    setBodyHeight(height);

    setBodyMounted(true);
  };

  const handlePress = (): void => {
    setCollapsed(!collapsed);
  };

  const renderIndicator = (
    element: AccordionItemProps[typeof TOGGLE_ELEMENT_PROPERTY],
  ): ReactElement => (
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
      {element}
    </Animated.View>
  );

  useEffect(() => {
    if (bodyMounted) {
      dropDownAnimValueList.setValue(collapsed ? -bodyHeight : 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyMounted]);

  useEffect(() => {
    const targetValue = collapsed ? -bodyHeight : 0;

    if (!shouldAnimate) {
      dropDownAnimValueList.setValue(targetValue);
    }

    Animated.timing(dropDownAnimValueList, {
      toValue: targetValue,
      duration: animDuration,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  useEffect(() => {
    const targetValue = collapsed ? 0 : 1;

    if (!shouldAnimate) {
      rotateAnimValue.setValue(targetValue);
    }

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
        style={titleContainer}
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
          <ItemContainer key={key} theme={theme} style={bodyContainer}>
            {renderBody(body)}
          </ItemContainer>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export default AccordionItem;
