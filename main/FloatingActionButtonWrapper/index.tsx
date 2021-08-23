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

interface FloatingActionButtonsWrapperProps<ITEM extends FABItem> {
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
}: FloatingActionButtonsWrapperProps<ITEM> & {
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
        {FABList.map((item, idx) =>
          renderFABListItem ? (
            <FABItemWrapperView key={item.icon + idx}>
              {renderFABListItem(item, idx)}
            </FABItemWrapperView>
          ) : (
            <FABItemWrapperView key={item.icon + idx}>
              {
                <IconButton
                  size={size}
                  icon={<StyledIcon theme={theme} size={24} name={item.icon} />}
                  onPress={() => onPressFABItem(item)}
                />
              }
            </FABItemWrapperView>
          ),
        )}
      </Animated.View>
      <FABItemWrapperView>
        {renderMainFAB ? (
          renderMainFAB(isActive)
        ) : (
          <IconButton
            size={size}
            icon={
              <StyledIcon
                size={24}
                name={isActive ? 'cross-light' : 'add-light'}
              />
            }
            onPress={() => setFabActive((prevState) => !prevState)}
          />
        )}
      </FABItemWrapperView>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
