import {View} from 'react-native';
import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Icon} from '../../../Icon';
import {Section} from '../../../GlobalStyles';
import {StyledIcon} from '../../../Icon/stories/Styles';

const IconButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          color="primary"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="secondary"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="success"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="warning"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="danger"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="info"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
        <IconButton
          color="light"
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonColors;
