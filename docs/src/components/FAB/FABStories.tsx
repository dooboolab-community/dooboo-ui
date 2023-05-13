import type {ComponentProps, ReactElement} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, FAB} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'FAB',
  component: FAB,
  viewMode: 'docs',
} as Meta;

type FABProps = ComponentProps<typeof FAB>;

const initialProps: FABProps = {
  onPressFAB: () => {},
  onPressItem: () => {},
  items: [
    {id: 'search', icon: 'HomeAlt'},
    {id: 'like', icon: 'FavoriteAlt'},
  ],
  isActive: true,
};

const Container = ({style, children}): ReactElement => {
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

const FABStory: Story<FABProps> = (args): ReactElement => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      style={css`
        height: 240px;
      `}
    >
      <FAB
        {...args}
        styles={{buttonSize: 'medium', iconSize: 25, gap: 60}}
        isActive={isActive}
        onPressFAB={() => setIsActive(!isActive)}
      />
    </Container>
  );
};

export const FABTemplate = FABStory.bind({});
FABTemplate.args = initialProps;
