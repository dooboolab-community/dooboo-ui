import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {FC, useMemo} from 'react';

import {Animated} from 'react-native';
import {IconButton} from '../IconButton';
import styled from '@emotion/native';

const AbsolutePositionWrapperView = styled.View`
  position: absolute;
`;

export const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const FABItemWrapperView = styled.View`
  position: relative;
  margin: 10px;
`;

export type FABItem = {
  icon: IconName;
  onPress: () => void;
};

interface FloatingActionButtonsWrapperProps {
  active: boolean;
  DefaultFAB: FABItem;
  ActiveFAB: FABItem;
  FABList: FABItem[];
  renderDefaultFAB?: (item: FABItem) => React.ReactElement;
  renderActiveFAB?: (item: FABItem) => React.ReactElement;
  renderFABListItem?: (item: FABItem, idx: number) => React.ReactElement;
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const FloatingActionButtons: FC<
  FloatingActionButtonsWrapperProps & {theme: DoobooTheme}
> = ({
  theme,
  active,
  DefaultFAB,
  ActiveFAB,
  FABList,
  renderDefaultFAB,
  renderActiveFAB,
  renderFABListItem,
  zIndex = 0,
  top = 'auto',
  bottom = 'auto',
  left = 'auto',
  right = 'auto',
}) => {
  const defaultFAB: React.ReactElement = useMemo(
    () =>
      renderDefaultFAB ? (
        renderDefaultFAB(DefaultFAB)
      ) : (
        <IconButton
          icon={<StyledIcon size={24} name={DefaultFAB.icon} />}
          onPress={DefaultFAB.onPress}
        />
      ),
    [renderDefaultFAB, DefaultFAB],
  );

  const activeFAB: React.ReactElement = useMemo(
    () =>
      renderActiveFAB ? (
        renderActiveFAB(ActiveFAB)
      ) : (
        <IconButton
          icon={<StyledIcon size={24} name={ActiveFAB.icon} />}
          onPress={ActiveFAB.onPress}
        />
      ),
    [renderActiveFAB, ActiveFAB],
  );

  return (
    <AbsolutePositionWrapperView
      style={{
        top,
        bottom,
        left,
        right,
        zIndex,
      }}>
      <Animated.View>
        {active &&
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
                    onPress={item.onPress}
                  />
                }
              </FABItemWrapperView>
            ),
          )}
      </Animated.View>
      <FABItemWrapperView>{active ? defaultFAB : activeFAB}</FABItemWrapperView>
    </AbsolutePositionWrapperView>
  );
};

export const FAB = withTheme(FloatingActionButtons);
