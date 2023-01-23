import {isEmptyObject} from '../utils';
import styled from '@emotion/native';

export const Hr = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.placeholder;
    }

    return theme.text.placeholder;
  }};
`;
