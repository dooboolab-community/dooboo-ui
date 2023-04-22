import React from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {light} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {isEmptyObject} from '../../utils/utils';

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

export type ProgressBarType = 'success' | 'danger' | 'warning' | 'info';

export type ProgressBarStyles = {
  background?: StyleProp<ViewStyle>;
  progress?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

interface ProgressProps {
  type?: string;
  value?: number;
}

interface ProgressBarProps {
  value: number;
  type?: ProgressBarType;
  styles?: ProgressBarStyles;
}

export {ProgressBarProps};

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const {value, type = 'info', styles = {}} = props;

  return (
    <Container>
      <BackgroundView
        style={styles?.background}
        testID="progress-line-background"
      >
        <Progress
          style={styles?.progress}
          value={value}
          type={type}
          testID="progress-line-main"
        />
      </BackgroundView>
      <NumberText
        style={styles?.text}
        testID="progress-line-text"
      >{`${value}%`}</NumberText>
    </Container>
  );
};
