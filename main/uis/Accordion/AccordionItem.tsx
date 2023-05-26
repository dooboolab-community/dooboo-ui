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

const ItemContainer = styled.View`
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
  const fadeRootAnim = useRef(new Animated.Value(0)).current;
  const fadeItemAnim = useRef(new Animated.Value(0)).current;

  const [bodyHeight, setBodyHeight] = useState(0);
  const [hasItemMounted, setHasItemMounted] = useState(false);
  const [hasCollapsed, setHasCollapsed] = useState(collapseOnStart);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (hasItemMounted) {
      return;
    }

    const {height} = e.nativeEvent.layout;

    setBodyHeight(height);
    setHasItemMounted(true);
  };

  const handlePress = (): void => {
    setHasCollapsed(!hasCollapsed);
  };

  useEffect(() => {
    if (hasItemMounted) {
      Animated.timing(fadeRootAnim, {
        toValue: 1,
        duration: 30,
        useNativeDriver: true,
      }).start();
    }
  }, [hasItemMounted, fadeRootAnim]);

  useEffect(() => {
    if (hasItemMounted) {
      Animated.timing(fadeItemAnim, {
        toValue: hasCollapsed ? 0 : 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [hasItemMounted, fadeItemAnim, hasCollapsed]);

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
        {opacity: fadeRootAnim},
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
          {typeof item.title === 'string' && !renderTitle ? (
            <Typography.Heading4>{item.title}</Typography.Heading4>
          ) : (
            renderTitle?.(item.title as T)
          )}
          {toggleElementPosition === 'right' ? toggleElContainer : null}
        </TitleContainer>
      </TitleTouch>
      <Animated.View
        testID={`body-${testID}`}
        style={{
          opacity: fadeItemAnim,
          height: hasItemMounted
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
            <ItemContainer style={styles?.itemContainer}>
              {typeof body === 'string' && !renderItem ? (
                <Typography.Body3 style={styles?.itemText}>
                  {body}
                </Typography.Body3>
              ) : (
                renderItem?.(body as K)
              )}
            </ItemContainer>
          </ItemTouch>
        ))}
      </Animated.View>
    </Animated.View>
  );
}

export default AccordionItem;
