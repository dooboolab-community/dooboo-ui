import {View} from 'react-native';
import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../../../main/IconButton';
import {Icon} from '../../../../main/Icon';
import {Section} from '../../../Styles';
import {StyledIcon} from '../../../Styles/IconStyles';

const IconButtonSizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          size="small"
          icon={<StyledIcon size={16} name="moment-solid" />}
        />
        <View style={{width: 8}} />
        <IconButton
          size="medium"
          icon={<StyledIcon size={24} name="add-light" />}
        />
        <View style={{width: 8}} />
        <IconButton
          size="large"
          icon={<StyledIcon size={32} name="chevron-right" />}
        />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonSizes;
