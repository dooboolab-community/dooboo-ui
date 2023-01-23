import {IC_FACEBOOK, IC_GOOGLE} from '../../icon';
import {Image, View} from 'react-native';
import styled, {css} from '@emotion/native';

import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  flex: 1;
  align-self: stretch;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdditionalElement: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <Button
          startElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          type="outlined"
          loading={googleLoading}
          style={{margin: 10}}
          styles={{
            container: css`
              padding: 10px;
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setGoogleLoading(true);
            action('google btn clicked');

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="GOOGLE SIGN IN"
        />
        <Button
          testID="btnFacebook"
          type="outlined"
          startElement={
            <View
              style={{
                position: 'absolute',
                left: 28,
              }}
            >
              <Image style={{width: 15, height: 28}} source={IC_FACEBOOK} />
            </View>
          }
          loading={facebookLoading}
          style={{margin: 10}}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setFacebookLoading(true);
            action('facebook btn clicked');

            const timeout = setTimeout(() => {
              setFacebookLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="FACEBOOK SIGN IN"
        />
      </StoryContainer>
    </ThemeProvider>
  );
};
