import {Image, View} from 'react-native';
import React, {useState} from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {Section} from '../../Styles';
import {Button} from '../../../main/Button';
import {Icon} from '../../../main/Icon';
import {IC_GOOGLE} from '../../../storybook/assets/icons';

const AddElements: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          startElement={<Icon name="bookmark-light" size={18} />}
          style={{padding: 4}}
        />
        <Button
          type="outlined"
          startElement={
            <Icon name="thumb-up-light" size={18} style={{marginRight: 8}} />
          }
          text="LIKE"
          style={{padding: 4}}
        />
        <Button
          type="outlined"
          endElement={
            <Icon
              name="trash-light"
              size={18}
              color="green"
              style={{marginLeft: 8}}
            />
          }
          text="DELETE"
          style={{padding: 4}}
        />
        <Button
          startElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          loading={googleLoading}
          style={{padding: 4}}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(e): void => {
            setGoogleLoading(true);

            action('GOOGLE SIGN IN')(e);

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="GOOGLE SIGN IN"
        />
      </Section>
    </ThemeProvider>
  );
};

export default AddElements;
