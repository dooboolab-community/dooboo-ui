import type {ComponentProps} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, Fab} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'Fab',
  component: Fab,
  viewMode: 'docs',
} as Meta;

type FabProps = ComponentProps<typeof Fab>;

const initialProps: FabProps = {
  onPressFab: () => {},
  onPressItem: () => {},
  icons: ['AppleLogo', 'AndroidLogo'],
  isActive: true,
};

const Container = ({style, children}): JSX.Element => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <View
        style={[
          css`
            flex-direction: row;
          `,
          style,
        ]}
      >
        {children}
      </View>
    </DoobooProvider>
  );
};

const FabStory: Story<FabProps> = (args): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      style={css`
        height: 240px;
      `}
    >
      <Fab
        {...args}
        isActive={isActive}
        onPressFab={() => setIsActive(!isActive)}
        gap={60}
      />
    </Container>
  );
};

export const FabTemplate = FabStory.bind({});
FabTemplate.args = initialProps;
