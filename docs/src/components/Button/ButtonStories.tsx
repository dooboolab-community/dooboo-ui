import type {ComponentProps} from 'react';
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

function Container({children}): JSX.Element {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      {children}
    </DoobooProvider>
  );
}

// eslint-disable-next-line react/function-component-definition
const ButtonStory: Story<ButtonProps> = (args): JSX.Element => {
  return (
    <Container>
      <Button {...args} />
    </Container>
  );
};

export const ButtonTemplate = ButtonStory.bind({});
ButtonTemplate.args = initialProps;

// Story: Button Types - Solid
function ButtonTypesStory({type}: {type?: ButtonType}): JSX.Element {
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
            color={color}
            key={`button-${color}`}
            onPress={() => {}}
            style={{margin: 8}}
            text={color}
            type={type}
          />
        ))}
      </View>
    </Container>
  );
}

export function ButtonTypeSolidStory(): JSX.Element {
  return <ButtonTypesStory type="solid" />;
}

// Story: Button Types - Outline
export function ButtonTypeOutlinedStory(): JSX.Element {
  return <ButtonTypesStory type="outlined" />;
}

// Story: Button Types - Text
export function ButtonTypeTextStory(): JSX.Element {
  return <ButtonTypesStory type="text" />;
}

// Story: Button Sizes
export function ButtonSizeStory(): JSX.Element {
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
            key={`button-${size}`}
            onPress={() => {}}
            size={size}
            style={{margin: 8}}
            text={size}
          />
        ))}
      </View>
    </Container>
  );
}

// Story: Button Elements
export function ButtonElementStory(): JSX.Element {
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
          loading={googleLoading}
          onPress={(): void => {
            setGoogleLoading(true);
            action('google btn clicked');

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          startElement={
            <View style={{marginRight: 12}}>
              <Image source={IC_GOOGLE} style={{width: 20, height: 20}} />
            </View>
          }
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
          text="GOOGLE SIGN IN"
          type="outlined"
        />
        <Button
          loading={facebookLoading}
          onPress={(): void => {
            setFacebookLoading(true);
            action('facebook btn clicked');

            const timeout = setTimeout(() => {
              setFacebookLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          startElement={
            <View
              style={css`
                margin-right: 12px;
              `}
            >
              <Image source={IC_FACEBOOK} style={{width: 15, height: 28}} />
            </View>
          }
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
          testID="btnFacebook"
          text="FACEBOOK SIGN IN"
          type="outlined"
        />
      </View>
    </Container>
  );
}
