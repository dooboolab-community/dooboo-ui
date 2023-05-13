import type {ComponentProps, ReactElement} from 'react';
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

const SwitchToggleStory: Story<SwitchToggleProps> = (args): ReactElement => {
  const [isOn, setIsOn] = useState(args.isOn);

  return (
    <Container>
      <SwitchToggle {...args} isOn={isOn} onPress={() => setIsOn(!isOn)} />
    </Container>
  );
};

export const SwitchToggleTemplate = SwitchToggleStory.bind({});
SwitchToggleTemplate.args = initialProps;
