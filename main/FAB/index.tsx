import {Animated, Easing, StyleProp, View, ViewStyle} from 'react-native';
import {ButtonSize, IconButton} from '../IconButton';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {ReactElement, useEffect, useRef, useState} from 'react';

import styled from '@emotion/native';

export const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const FABItemWrapper = styled.View`
  margin: 10px;
`;

export interface FABItem {
  icon: IconName;
  id: string;
}

export interface FABProps<Item extends FABItem> {
  isActive: boolean;
  ItemList: Item[];
  onPressFAB: () => void;
  onPressListItem: (item?: Item) => void;
  renderFAB?: () => ReactElement;
  renderFabItem?: (item: Item, idx: number) => ReactElement;
  size: ButtonSize;
  style?: StyleProp<ViewStyle>;
}

function FloatingActionButtons<Item extends FABItem = FABItem>({
  isActive,
  theme,
  ItemList,
  onPressFAB,
  onPressListItem,
  renderFAB,
  renderFabItem,
  size = 'large',
  style,
}: FABProps<Item> & {
  theme: DoobooTheme;
}): ReactElement {
  const fadeAnim = useRef(new Animated.Value(0));

  useEffect(() => {
    return Animated.timing(fadeAnim.current, {
      toValue: isActive ? 1 : 0,
      useNativeDriver: true,
      easing: Easing.quad,
      duration: 200,
    }).start();
  }, [fadeAnim, isActive]);

  useEffect(() => {
    Animated.timing(fadeAnim.current, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View
      style={[
        {
          position: 'absolute',
          right: 10,
          bottom: 10,
          zIndex: 999,
          flex: 1,
        },
        style,
      ]}>
      <Animated.View>
        {isActive &&
          ItemList.map((item, idx) => {
            return (
              <FABItemWrapper
                key={item.id}
                style={{
                  position: 'absolute',
                  transform: [{translateY: -80 * (idx + 1)}],
                }}>
                {renderFabItem ? (
                  renderFabItem(item, idx)
                ) : (
                  <IconButton
                    testID={item.id}
                    size={size}
                    icon={
                      <StyledIcon theme={theme} size={24} name={item.icon} />
                    }
                    onPress={() => onPressListItem(item)}
                  />
                )}
              </FABItemWrapper>
            );
          })}
      </Animated.View>
      <FABItemWrapper>
        <Animated.View>
          {renderFAB ? (
            renderFAB()
          ) : (
            <IconButton
              testID={'main_fab'}
              size={size}
              icon={
                isActive ? (
                  <StyledIcon size={24} name="cross-light" />
                ) : (
                  <StyledIcon size={24} name="add-light" />
                )
              }
              onPress={onPressFAB}
            />
          )}
        </Animated.View>
      </FABItemWrapper>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
