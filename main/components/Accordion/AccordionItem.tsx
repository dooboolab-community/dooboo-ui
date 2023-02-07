import {Animated, Easing} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';

import type {AccordionBaseProps} from './Accordion';
import {Icon} from '../Icon';
import type {LayoutChangeEvent} from 'react-native';
import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const TitleContainer = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${({theme}) => theme.text.basic};
  height: 50px;
  z-index: 10;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.contrast};
`;

const ItemContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.bg.basic};
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.text.contrast};
  position: absolute;
  padding: 0px 20px;
`;

const StyledItem = styled.Text`
  color: ${({theme}) => theme.text.basic};
  padding: 0px 20px;
`;

export type AccordionListItemType = {
  startElement?: ReactElement;
  text: string;
  endElement?: ReactElement;
};

export type AccordionData = {
  title: AccordionListItemType;
  bodies: AccordionListItemType[];
};

type Props = AccordionBaseProps<AccordionData> & {
  testID: string;
  dropDownAnimValue: Animated.Value;
};

function AccordionItem(props: Props): ReactElement {
  const {theme} = useTheme();

  const {
    testID,
    data: item,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration = 200,
    activeOpacity = 1,
    toggleElement = <StyledIcon name="chevron-down-light" theme={theme} />,
    onPressItem,
    renderTitle = (title) => (
      <>
        {title.startElement}
        <StyledTitle theme={theme}>{title.text}</StyledTitle>
        {title.endElement}
      </>
    ),
    renderBody = (body) => (
      <>
        {body.startElement}
        <StyledItem theme={theme}>{body.text}</StyledItem>
        {body.endElement}
      </>
    ),
    dropDownAnimValue,
    styles,
    style,
  } = props;

  const {
    titleContainer = {backgroundColor: theme.role.primary},
    bodyContainer = {backgroundColor: theme.bg.basic},
  } = styles ?? {};

  const rotateAnimValueRef = useRef(new Animated.Value(0));
  const dropDownAnimValueRef = useRef(dropDownAnimValue);

  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyMounted, setBodyMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(collapseOnStart);

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

  const startAnimation = useCallback(() => {
    const targetValue = collapsed ? 0 : 1;

    if (!shouldAnimate) {
      rotateAnimValueRef.current.setValue(targetValue);
      dropDownAnimValueRef.current.setValue(targetValue);

      return;
    }

    const config = {
      duration: animDuration,
      easing: Easing.linear,
      useNativeDriver: false,
      toValue: targetValue,
    };

    Animated.parallel([
      Animated.timing(rotateAnimValueRef.current, config),
      Animated.timing(dropDownAnimValueRef.current, config),
    ]).start();
  }, [collapsed, shouldAnimate, animDuration]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const indicatorEl = (
    <Animated.View
      style={{
        position: 'absolute',
        right: 20,
        transform: [
          {
            rotate: rotateAnimValueRef.current.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '180deg'],
            }),
          },
        ],
      }}
    >
      {toggleElement}
    </Animated.View>
  );

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'transparent',
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <TitleContainer
        theme={theme}
        testID={`title-${testID}`}
        onPress={handlePress}
        activeOpacity={activeOpacity}
        style={titleContainer}
      >
        <>
          {renderTitle(item.title)}
          {indicatorEl}
        </>
      </TitleContainer>

      <Animated.View
        testID={`body-${testID}`}
        style={{
          height: bodyMounted
            ? dropDownAnimValueRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, bodyHeight],
              })
            : undefined,
        }}
        onLayout={handleBodyLayout}
        accessibilityState={{expanded: !collapsed}}
      >
        {item.bodies.map((body, index) => (
          <ItemContainer
            key={`body-${index}`}
            style={bodyContainer}
            activeOpacity={activeOpacity}
            onPress={() => onPressItem?.(item.title, body)}
          >
            {renderBody(body)}
          </ItemContainer>
        ))}
      </Animated.View>
    </Animated.View>
  );
}

export default AccordionItem;
