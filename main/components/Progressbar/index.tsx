import type {StyleProp, TextStyle, ViewStyle} from 'react-native';

import React from 'react';
import {isEmptyObject} from '../../utils';
import {light} from '@dooboo-ui/theme';
import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BackgroundView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.bg.paper};
  height: 24px;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
  z-index: 1;
`;

const Progress = styled.View<ProgressProps>`
  width: ${({value}) => `${value}%`};
  background-color: ${({theme, type}) => {
    theme = isEmptyObject(theme) ? light : theme;

    return theme.role[type ?? 'info'];
  }};
  height: 100%;
`;

const NumberText = styled.Text`
  position: absolute;
  font-size: 14px;
  z-index: 2;
  color: ${({theme}) => theme.text.basic};
`;

export type ProgressbarType = 'success' | 'danger' | 'warning' | 'info';

export type ProgressbarStyles = {
  background?: StyleProp<ViewStyle>;
  progress?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

interface ProgressProps {
  type?: string;
  value?: number;
}

interface Props {
  value: number;
  type?: ProgressbarType;
  styles?: ProgressbarStyles;
}

export {Props as ProgressbarProps};

export const Progressbar: React.FC<Props> = (props) => {
  const {value, type = 'info', styles = {}} = props;

  return (
    <Container>
      <BackgroundView
        style={styles?.background}
        testID="progressbar-background"
      >
        <Progress
          style={styles?.progress}
          value={value}
          type={type}
          testID="progressbar-main"
        />
      </BackgroundView>
      <NumberText
        style={styles?.text}
        testID="progressbar-text"
      >{`${value}%`}</NumberText>
    </Container>
  );
};
