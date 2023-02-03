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

export type ProgressLineType = 'success' | 'danger' | 'warning' | 'info';

export type ProgressLineStyles = {
  background?: StyleProp<ViewStyle>;
  progress?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

interface ProgressProps {
  type?: string;
  value?: number;
}

interface ProgressLineProps {
  value: number;
  type?: ProgressLineType;
  styles?: ProgressLineStyles;
}

export {ProgressLineProps};

export const ProgressLine: React.FC<ProgressLineProps> = (props) => {
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
