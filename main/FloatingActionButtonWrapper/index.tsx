import {Animated, Easing, StyleProp, View, ViewStyle} from 'react-native';
import {ButtonSize, IconButton} from '../IconButton';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import {ReactElement, useEffect, useRef, useState} from 'react';

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
  ButtonList: ITEM[];
  onPressListItem: (item: ITEM | FABItem) => void;
  renderMainFAB?: (isActive: boolean, onPressFAB: () => void) => ReactElement;
  renderFABListItem?: (item: ITEM, idx: number) => ReactElement;
  size: ButtonSize;
  style?: StyleProp<ViewStyle>;
}

function FloatingActionButtons<ITEM extends FABItem = FABItem>({
  theme,
  ButtonList: FABList,
  onPressListItem: onPressFABItem,
  renderMainFAB,
  renderFABListItem,
  size = 'large',
  style,
}: FABProps<ITEM> & {
  theme: DoobooTheme;
}): ReactElement {
  const [isActive, setIsActive] = useState(false);
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
            <FABItemWrapperView key={item.id}>
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
        <Animated.View style={{transform: [{rotate: spin}]}}>
          {renderMainFAB ? (
            renderMainFAB(isActive, () =>
              setIsActive((prevState) => !prevState),
            )
          ) : (
            <IconButton
              testID={'main_fab'}
              size={size}
              icon={<StyledIcon size={24} name="add-light" />}
              onPress={() => setIsActive((prevState) => !prevState)}
            />
          )}
        </Animated.View>
      </FABItemWrapperView>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
