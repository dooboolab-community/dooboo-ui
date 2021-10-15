import {isEmptyObject} from './utils';
import {light} from '@dooboo-ui/theme';
import styled from '@emotion/native';

export const Hr = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => {
    if (isEmptyObject(theme)) return light.placeholder;

    return theme.placeholder;
  }};
`;
