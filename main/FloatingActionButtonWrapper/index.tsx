import {Animated, Easing, StyleProp, View, ViewStyle} from 'react-native';
import {ButtonSize, IconButton} from '../IconButton';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {ReactElement, useEffect, useRef, useState} from 'react';

import styled from '@emotion/native';

export const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const FABItemWrapperView = styled.View`
  position: relative;
  margin: 10px;
`;

export interface FABItem {
  icon: IconName;
  id: string;
}

export interface FABProps<ITEM extends FABItem> {
  FABList: ITEM[];
  onPressFABItem: (item: ITEM | FABItem) => void;
  renderMainFAB?: (isActive: boolean) => React.ReactElement;
  renderFABListItem?: (item: ITEM, idx: number) => React.ReactElement;
  size: ButtonSize;
  style?: StyleProp<ViewStyle>;
}

function FloatingActionButtons<ITEM extends FABItem = FABItem>({
  theme,
  FABList,
  onPressFABItem,
  renderMainFAB,
  renderFABListItem,
  size = 'large',
  style,
}: FABProps<ITEM> & {
  theme: DoobooTheme;
}): ReactElement {
  const [isActive, setFabActive] = useState(false);
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
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  }, [fadeAnim]);

  const spin = fadeAnim.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View
      style={
        style || {
          right: '5%',
          bottom: '5%',
          zIndex: 999,
          position: 'absolute',
        }
      }>
      <Animated.View
        style={{
          opacity: fadeAnim.current,
        }}>
        {FABList.map((item, idx) => {
          return (
            <FABItemWrapperView key={item.icon + idx}>
              {renderFABListItem ? (
                renderFABListItem(item, idx)
              ) : (
                <IconButton
                  testID={item.id}
                  size={size}
                  icon={<StyledIcon theme={theme} size={24} name={item.icon} />}
                  onPress={() => onPressFABItem(item)}
                />
              )}
            </FABItemWrapperView>
          );
        })}
      </Animated.View>
      <FABItemWrapperView>
        <Animated.View
          testID={'main_fab_animation_wrapper'}
          style={{transform: [{rotate: spin}]}}>
          {renderMainFAB ? (
            renderMainFAB(isActive)
          ) : (
            <IconButton
              testID={'main_fab'}
              size={size}
              icon={<StyledIcon size={24} name="add-light" />}
              onPress={() => setFabActive((prevState) => !prevState)}
            />
          )}
        </Animated.View>
      </FABItemWrapperView>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
