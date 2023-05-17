import styled from '@emotion/native';

import {isEmptyObject} from '../../utils/utils';

export const Hr = styled.View`
  height: 0.5px;
  width: 100%;
  background-color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.role.border;
    }

    return theme.role.border;
  }};
`;
