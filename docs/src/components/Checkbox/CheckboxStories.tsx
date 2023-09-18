import type {ComponentProps} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {Checkbox, DoobooProvider, Typography} from 'dooboo-ui';
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

function Container({children}): JSX.Element {
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
}

// eslint-disable-next-line react/function-component-definition
const CheckboxStory: Story<CheckboxProps> = (args): JSX.Element => {
  return (
    <Container>
      <Checkbox {...args} />
    </Container>
  );
};

export const CheckboxTemplate = CheckboxStory.bind({});
CheckboxTemplate.args = initialProps;

// Disabled
export function CheckboxDisabledStory(): JSX.Element {
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

export function CheckboxSolid(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

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
          color="primary"
          onPress={() => setChecked(!checked)}
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          color="secondary"
          onPress={() => setChecked(!checked)}
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          color="success"
          onPress={() => setChecked(!checked)}
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          color="warning"
          onPress={() => setChecked(!checked)}
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          color="info"
          onPress={() => setChecked(!checked)}
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          color="danger"
          onPress={() => setChecked(!checked)}
        />
      </View>
    </Container>
  );
}

// StartElement
export function CheckboxStartElement(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

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
export function CheckboxEndElement(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

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
          endElement={
            <Typography.Body2>Hello this is a checkbox</Typography.Body2>
          }
          onPress={() => setChecked(!checked)}
        />
      </View>
    </Container>
  );
}
