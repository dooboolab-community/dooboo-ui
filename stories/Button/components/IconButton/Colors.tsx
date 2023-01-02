import {View} from 'react-native';
import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../../../main/IconButton';
import {Icon} from '../../../../main/Icon';
import {Section} from '../../../Styles';
import {StyledIcon} from '../../../Styles/IconStyles';

const IconButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      {/*<Button color="brand" text="BRAND" style={{padding: 4}} />*/}
      {/*<Button color="primary" text="PRIMARY" style={{padding: 4}} />*/}
      {/*<Button color="secondary" text="SECONDARY" style={{padding: 4}} />*/}
      {/*<Button color="accept" text="ACCEPT" style={{padding: 4}} />*/}
      {/*<Button color="info" text="INFO" style={{padding: 4}} />*/}
      {/*<Button color="light" text="LIGHT" style={{padding: 4}} />*/}
      {/*<Button color="success" text="SUCCESS" style={{padding: 4}} />*/}
      {/*<Button color="warning" text="WARNING" style={{padding: 4}} />*/}
      {/*<Button color="danger" text="DANGER" style={{padding: 4}} />*/}
      <Section>
        <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
        <View style={{width: 8}} />
        <IconButton icon={<StyledIcon size={24} name="add-light" />} />
        <View style={{width: 8}} />
        <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonColors;
