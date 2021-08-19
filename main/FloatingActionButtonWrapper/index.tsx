import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {ReactElement, useMemo} from 'react';

import {IconButton} from '../IconButton';
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
  isActive: boolean;
  FABList: ITEM[];
  onPressFABItem: (item: ITEM | FABItem) => void;
  renderMainFAB?: (isActive: boolean) => React.ReactElement;
  renderFABListItem?: (item: ITEM, idx: number) => React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

function FloatingActionButtons<ITEM extends FABItem = FABItem>({
  theme,
  isActive,
  FABList,
  onPressFABItem,
  renderMainFAB,
  renderFABListItem,
  style,
}: FloatingActionButtonsWrapperProps<ITEM> & {
  theme: DoobooTheme;
}): ReactElement {
  const mainFAB: React.ReactElement = useMemo(() => {
    const defaultFab = isActive ? (
      <IconButton
        icon={<StyledIcon size={24} name="cross-light" />}
        onPress={() => onPressFABItem({id: 'mainActive', icon: 'cross-light'})}
      />
    ) : (
      <IconButton
        icon={<StyledIcon size={24} name="add-light" />}
        onPress={() => onPressFABItem({id: 'mainDefault', icon: 'add-light'})}
      />
    );

    const fab = renderMainFAB ? renderMainFAB(isActive) : defaultFab;

    return fab;
  }, [renderMainFAB, isActive, onPressFABItem]);

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
      <Animated.View>
        {isActive &&
          FABList.map((item, idx) =>
            renderFABListItem ? (
              <FABItemWrapperView key={item.icon + idx}>
                {renderFABListItem(item, idx)}
              </FABItemWrapperView>
            ) : (
              <FABItemWrapperView key={item.icon + idx}>
                {
                  <IconButton
                    icon={
                      <StyledIcon theme={theme} size={24} name={item.icon} />
                    }
                    onPress={() => onPressFABItem(item)}
                  />
                }
              </FABItemWrapperView>
            ),
          )}
      </Animated.View>
      <FABItemWrapperView>{mainFAB}</FABItemWrapperView>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
