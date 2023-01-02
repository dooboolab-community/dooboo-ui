import {View} from 'react-native';
import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../../../main/IconButton';
import {Section} from '../../../Styles';
import {StyledIcon} from '../../../Styles/IconStyles';

const IconButtonBasic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
        <View style={{width: 8}} />
        <IconButton
          type="contained"
          icon={<StyledIcon size={24} name="add-light" />}
        />
        <View style={{width: 8}} />
        <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonBasic;
