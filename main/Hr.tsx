import styled from '@emotion/native';

import {light} from '.';
import {isEmptyObject} from './utils';

export const Hr = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => {
    if (isEmptyObject(theme)) return light.placeholder;

    return theme.placeholder;
  }};
`;
