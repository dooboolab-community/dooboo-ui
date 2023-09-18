import type {ComponentProps} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, SwitchToggle} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'SwitchToggle',
  component: SwitchToggle,
  viewMode: 'docs',
} as Meta;

type SwitchToggleProps = ComponentProps<typeof SwitchToggle>;

const initialProps: SwitchToggleProps = {isOn: false};

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
const SwitchToggleStory: Story<SwitchToggleProps> = (args): JSX.Element => {
  // eslint-disable-next-line react/destructuring-assignment
  const [isOn, setIsOn] = useState(args.isOn);

  return (
    <Container>
      <SwitchToggle {...args} isOn={isOn} onPress={() => setIsOn(!isOn)} />
    </Container>
  );
};

export const SwitchToggleTemplate = SwitchToggleStory.bind({});
SwitchToggleTemplate.args = initialProps;
