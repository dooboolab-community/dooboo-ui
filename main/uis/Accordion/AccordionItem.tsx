import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useEffect, useRef, useState} from 'react';
import type {LayoutChangeEvent} from 'react-native';
import {Animated, Easing} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import {Icon} from '../Icon';
import {Typography} from '../Typography';

import type {AccordionBaseProps} from './Accordion';

const TitleTouch = styled.TouchableOpacity`
  z-index: 10;
`;

const TitleContainer = styled.View`
  height: 48px;
  background-color: ${({theme}) => theme.bg.basic};

  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.basic};
  font-weight: 600;
`;

const ItemTouch = styled.TouchableOpacity``;

const BodyContainer = styled.View`
  height: 48px;
  background-color: ${({theme}) => theme.bg.paper};
  padding: 8px 12px;

  flex-direction: row;
  align-items: center;
`;

export type AccordionItemDataType<T, K> = {
  title: T;
  items: K[];
};

type Props<T, K> = Omit<AccordionBaseProps<T, K>, 'data' | 'style'> & {
  testID: string;
  data: AccordionItemDataType<string, string> | AccordionItemDataType<T, K>;
  dropDownAnimValue: Animated.Value;
};

function AccordionItem<T, K>(props: Props<T, K>): ReactElement {
  const {theme} = useTheme();

  const {
    testID,
    data: item,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration = 200,
    activeOpacity = 1,
    toggleElement = <StyledIcon name="ChevronDown" size={14} />,
    toggleElementPosition,
    onPressItem,
    renderTitle,
    renderItem,
    dropDownAnimValue,
    styles,
  } = props;

  const rotateAnimValueRef = useRef(new Animated.Value(0));
  const dropDownAnimValueRef = useRef(dropDownAnimValue);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [bodyHeight, setBodyHeight] = useState(0);
  const [isBodyMounted, setIsBodyMounted] = useState(false);
  const [hasCollapsed, setHasCollapsed] = useState(collapseOnStart);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (isBodyMounted) {
      return;
    }

    const {height} = e.nativeEvent.layout;

    setBodyHeight(height);
    setIsBodyMounted(true);
  };

  const handlePress = (): void => {
    setHasCollapsed(!hasCollapsed);
  };

  useEffect(() => {
    if (isBodyMounted) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 30,
        useNativeDriver: true,
      }).start();
    }
  }, [isBodyMounted, fadeAnim]);

  useEffect(() => {
    const targetValue = hasCollapsed ? 0 : 1;

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
  }, [hasCollapsed, shouldAnimate, animDuration]);

  const toggleElContainer = (
    <Animated.View
      style={[
        css`
          margin-right: ${toggleElementPosition === 'left' ? '12px' : 0};
        `,
        {
          transform: [
            {
              rotate: rotateAnimValueRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        },
        styles?.toggleElement,
      ]}
    >
      {toggleElement}
    </Animated.View>
  );

  return (
    <Animated.View
      style={[
        css`
          background-color: transparent;
          overflow: hidden;
        `,
        {opacity: fadeAnim},
        styles?.container,
      ]}
    >
      <TitleTouch
        theme={theme}
        testID={`title-${testID}`}
        onPress={handlePress}
        activeOpacity={activeOpacity}
      >
        <TitleContainer
          style={[
            css`
              justify-content: ${toggleElementPosition === 'right'
                ? 'space-between'
                : 'flex-start'};
            `,
            styles?.titleContainer,
          ]}
        >
          {toggleElementPosition === 'left' ? toggleElContainer : null}
          {typeof item.title === 'string' ? (
            <Typography.Heading4>{item.title}</Typography.Heading4>
          ) : (
            renderTitle?.(item.title)
          )}
          {toggleElementPosition === 'right' ? toggleElContainer : null}
        </TitleContainer>
      </TitleTouch>
      <Animated.View
        testID={`body-${testID}`}
        style={{
          height: isBodyMounted
            ? dropDownAnimValueRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, bodyHeight],
              })
            : undefined,
        }}
        onLayout={handleBodyLayout}
        accessibilityState={{expanded: !hasCollapsed}}
      >
        {item.items.map((body, index) => (
          <ItemTouch
            key={`body-${index}`}
            activeOpacity={activeOpacity}
            onPress={() => onPressItem?.(item.title, body)}
          >
            <BodyContainer style={styles?.bodyContainer}>
              {typeof body === 'string' ? (
                <Typography.Body3 style={styles?.bodyText}>
                  {body}
                </Typography.Body3>
              ) : (
                renderItem?.(body)
              )}
            </BodyContainer>
          </ItemTouch>
        ))}
      </Animated.View>
    </Animated.View>
  );
}

export default AccordionItem;
