import type {ComponentProps, ReactElement} from 'react';
import {useState} from 'react';
import {Image, View} from 'react-native';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import type {Meta, Story} from '@storybook/react/types-6-0';
import type {ButtonColorType, ButtonSizeType, ButtonType} from 'dooboo-ui';
import {Button, DoobooProvider} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

import {IC_FACEBOOK, IC_GOOGLE} from '../../icon';

export default {
  title: 'Button',
  component: Button,
  viewMode: 'docs',
} as Meta;

type ButtonProps = ComponentProps<typeof Button>;

const initialProps: ButtonProps = {
  onPress: () => {},
  disabled: false,
  borderRadius: 8,
  text: 'Button',
  size: 'medium',
  activeOpacity: 0.8,
  loading: false,
  type: 'solid',
};

const Container = ({children}): ReactElement => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      {children}
    </DoobooProvider>
  );
};

const ButtonStory: Story<ButtonProps> = (args): ReactElement => {
  return (
    <Container>
      <Button {...args} />
    </Container>
  );
};

export const ButtonTemplate = ButtonStory.bind({});
ButtonTemplate.args = initialProps;

// Story: Button Types - Solid
const ButtonTypesStory = ({type}: {type?: ButtonType}): ReactElement => {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <Container>
      <View
        style={css`
          padding: 8px 0;

          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
        `}
      >
        {colors.map((color) => (
          <Button
            type={type}
            color={color}
            text={color}
            style={{margin: 8}}
            onPress={() => {}}
          />
        ))}
      </View>
    </Container>
  );
};

export const ButtonTypeSolidStory = (): ReactElement => (
  <ButtonTypesStory type="solid" />
);

// Story: Button Types - Outline
export const ButtonTypeOutlinedStory = (): ReactElement => (
  <ButtonTypesStory type="outlined" />
);

// Story: Button Types - Text
export const ButtonTypeTextStory = (): ReactElement => (
  <ButtonTypesStory type="text" />
);

// Story: Button Sizes
export function ButtonSizeStory(): ReactElement {
  const sizes: ButtonSizeType[] = ['large', 'medium', 'small'];

  return (
    <Container>
      <View
        style={{
          marginVertical: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {sizes.map((size) => (
          <Button
            color="primary"
            size={size}
            text={size}
            style={{margin: 8}}
            onPress={() => {}}
          />
        ))}
      </View>
    </Container>
  );
}

// Story: Button Elements
export const ButtonElementStory = (): ReactElement => {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <Container>
      <View
        style={css`
          flex: 1;
          flex-wrap: wrap;
        `}
      >
        <Button
          startElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          type="outlined"
          loading={googleLoading}
          style={css`
            margin: 10px;
          `}
          styles={{
            container: css`
              padding: 10px;
              border-radius: 80px;
              border-width: 0.5px;
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
              style={css`
                margin-right: 12px;
              `}
            >
              <Image style={{width: 15, height: 28}} source={IC_FACEBOOK} />
            </View>
          }
          loading={facebookLoading}
          style={css`
            margin: 10px;
          `}
          styles={{
            container: css`
              align-self: stretch;
              border-radius: 80px;
              border-width: 0.5px;
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
      </View>
    </Container>
  );
};
