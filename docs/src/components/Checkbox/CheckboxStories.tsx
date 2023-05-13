import type {ComponentProps, ReactElement} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {
  Checkbox,
  DoobooProvider,
  LoadingIndicator,
  Typography,
} from 'dooboo-ui';
import {useFonts} from 'expo-font';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'Checkbox',
  component: Checkbox,
  viewMode: 'docs',
} as Meta;

type CheckboxProps = ComponentProps<typeof Checkbox>;

const initialProps: CheckboxProps = {
  checked: false,
};

const Container = ({children}): ReactElement => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <View
        style={css`
          flex-direction: row;
        `}
      >
        {children}
      </View>
    </DoobooProvider>
  );
};

const CheckboxStory: Story<CheckboxProps> = (args): ReactElement => {
  return (
    <Container>
      <Checkbox {...args} />
    </Container>
  );
};

export const CheckboxTemplate = CheckboxStory.bind({});
CheckboxTemplate.args = initialProps;

// Disabled
export function CheckboxDisabledStory(): ReactElement {
  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Container>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 5,
        }}
      >
        <Checkbox disabled />
      </View>
    </Container>
  );
}

export function CheckboxSolid(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Container>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 5,
        }}
      >
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="primary"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="secondary"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="success"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="warning"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="info"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="danger"
        />
      </View>
    </Container>
  );
}

// StartElement
export function CheckboxStartElement(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Container>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          startElement={
            <Typography.Body2>Hello this is a checkbox</Typography.Body2>
          }
        />
      </View>
    </Container>
  );
}

// EndElement
export function CheckboxEndElement(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Container>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          endElement={
            <Typography.Body2>Hello this is a checkbox</Typography.Body2>
          }
        />
      </View>
    </Container>
  );
}
