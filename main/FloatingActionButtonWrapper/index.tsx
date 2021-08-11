import {DoobooTheme, light, withTheme} from '../theme';
import React, {FC} from 'react';

import {ViewStyle} from 'react-native';
import styled from '@emotion/native';

const FixedPositionWrapperView = styled.View`
  position: fixed;
  top: ${(props: ViewStyle) => props.top};
  bottom: ${(props: ViewStyle) => props.bottom};
  left: ${(props: ViewStyle) => props.left};
  right: ${(props: ViewStyle) => props.bottom};
`;

const ExpendWrapperView = styled.View``;

interface FloatingActionButtonWrapperProps {
  active: boolean;
  DefaultMainActionButton: React.ReactElement;
  ActiveMainActionButton: React.ReactElement;
  ActionButtons: Array<React.ReactElement>;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const FloatingActionButtonWrapper: FC<
  FloatingActionButtonWrapperProps & {theme: DoobooTheme}
> = ({
  active,
  DefaultMainActionButton,
  ActiveMainActionButton,
  ActionButtons,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <FixedPositionWrapperView style={{top, bottom, left, right}}>
      {active ? ActiveMainActionButton : DefaultMainActionButton}
      <ExpendWrapperView>
        {ActionButtons.map((ActionButton) => ActionButton)}
      </ExpendWrapperView>
    </FixedPositionWrapperView>
  );
};

FloatingActionButtonWrapper.defaultProps = {theme: light};

export const IconButton = withTheme(FloatingActionButtonWrapper);
