import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from '@emotion/native';
import {light} from '@dooboo-ui/theme';
import {isEmptyObject} from '../utils';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BackgroundView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.light};
  height: 24px;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
  z-index: 1;
`;

const Progress = styled.View<ProgressProps>`
  width: ${({number}) => `${number}%`};
  background-color: ${({theme, type}) => {
    theme = isEmptyObject(theme) ? light : theme;
    if (type === 'light') return theme.primary;

    return theme[type ?? 'primary'];
  }};
  height: 100%;
`;

const NumberText = styled.Text`
  position: absolute;
  font-size: 14px;
  z-index: 2;
  color: ${({theme}) => theme.text};
`;

export type ProgressbarType = 'success' | 'danger' | 'warning' | 'info';

export type Styles = {
  backgroundStyle?: StyleProp<ViewStyle>;
  progressStyle?: StyleProp<ViewStyle>;
  numberTextStyle?: StyleProp<TextStyle>;
};

interface ProgressProps {
  type?: string;
  number?: number;
}

interface Props {
  number: number;
  type?: ProgressbarType;
  styles?: Styles;
}

export const Progressbar: React.FC<Props> = (props) => {
  const {number, type = 'info', styles = {}} = props;

  return (
    <Container>
      <BackgroundView style={styles?.backgroundStyle}>
        <Progress style={styles?.progressStyle} number={number} type={type} />
      </BackgroundView>
      <NumberText style={styles?.numberTextStyle}>{`${number}%`}</NumberText>
    </Container>
  );
};
