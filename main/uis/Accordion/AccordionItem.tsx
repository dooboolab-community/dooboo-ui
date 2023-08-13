// Caveat: Expo web needs React to be imported
import React, {useEffect, useRef, useState} from 'react';
import type {LayoutChangeEvent} from 'react-native';
import {Animated, Easing, View} from 'react-native';
import styled, {css} from '@emotion/native';

import {Icon} from '../Icon';
import {Typography} from '../Typography';

import type {AccordionBaseProps} from './';

const TitleTouch = styled.TouchableOpacity`
  height: 48px;
  background-color: ${({theme}) => theme.bg.basic};

  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.basic};
  font-weight: bold;
`;

const ItemTouch = styled.TouchableOpacity`
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
};

export function AccordionItem<T, K>(props: Props<T, K>): JSX.Element {
  const {
    testID,
    data: data,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration = 200,
    activeOpacity = 1,
    toggleElement = <StyledIcon name="CaretDown" size={14} />,
    toggleElementPosition,
    onPressItem,
    renderTitle,
    renderItem,
    styles,
  } = props;

  const dropDownAnimValueRef = useRef(new Animated.Value(0));
  const rotateAnimValueRef = useRef(new Animated.Value(0));
  const fadeItemAnim = useRef(new Animated.Value(0)).current;
  const [itemHeight, setItemHeight] = useState(0);
  const [collapsed, setCollapsed] = useState(collapseOnStart);

  useEffect(() => {
    Animated.timing(fadeItemAnim, {
      toValue: collapsed ? 0 : 1,
      duration: !collapsed ? 300 : 100,
      useNativeDriver: false,
    }).start();
  }, [fadeItemAnim, collapsed]);

  useEffect(() => {
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
        styles?.container,
      ]}
    >
      {/* Invisible: Place it at the top for z-index */}
      <View
        onLayout={(e: LayoutChangeEvent) => {
          setItemHeight(e.nativeEvent.layout.height);
        }}
        style={css`
          position: absolute;
          opacity: 0;
        `}
      >
        {data.items.map((body, index) => (
          <ItemTouch
            key={`body-${index}`}
            activeOpacity={activeOpacity}
            onPress={() => onPressItem?.(data.title, body)}
          >
            {typeof body === 'string' && !renderItem ? (
              <Typography.Body3 style={styles?.itemText}>
                {body}
              </Typography.Body3>
            ) : (
              renderItem?.(body as K)
            )}
          </ItemTouch>
        ))}
      </View>
      {/* Title */}
      <TitleTouch
        testID={`title-${testID}`}
        style={[
          css`
            justify-content: ${toggleElementPosition === 'right'
              ? 'space-between'
              : 'flex-start'};
          `,
          styles?.titleContainer,
        ]}
        onPress={() => setCollapsed(!collapsed)}
        activeOpacity={activeOpacity}
      >
        {toggleElementPosition === 'left' ? toggleElContainer : null}
        {typeof data.title === 'string' && !renderTitle ? (
          <Typography.Heading4 style={styles?.titleText}>
            {data.title}
          </Typography.Heading4>
        ) : (
          renderTitle?.(data.title as T)
        )}
        {toggleElementPosition === 'right' ? toggleElContainer : null}
      </TitleTouch>

      {/* Item */}
      <Animated.View
        testID={`body-${testID}`}
        style={[
          {
            opacity: fadeItemAnim,
            height: dropDownAnimValueRef.current.interpolate({
              inputRange: [0, 1],
              outputRange: [0, itemHeight],
            }),
          },
        ]}
        accessibilityState={{expanded: !collapsed}}
      >
        {data.items.map((body, index) => (
          <ItemTouch
            key={`body-${index}`}
            activeOpacity={activeOpacity}
            onPress={() => onPressItem?.(data.title, body)}
            style={styles?.itemContainer}
          >
            {typeof body === 'string' && !renderItem ? (
              <Typography.Body3 style={styles?.itemText}>
                {body}
              </Typography.Body3>
            ) : (
              renderItem?.(body as K)
            )}
          </ItemTouch>
        ))}
      </Animated.View>
    </Animated.View>
  );
}
