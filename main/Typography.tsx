import {DoobooTheme, light, withTheme} from './theme';

import styled from '@emotion/native';

const TitleComponent = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => theme.text || '#000'};
`;

TitleComponent.defaultProps = {theme: light};

export const Title = withTheme(TitleComponent);
