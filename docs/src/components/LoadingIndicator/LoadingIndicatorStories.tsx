import type {ComponentProps} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, LoadingIndicator} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'LoadingIndicator',
  component: LoadingIndicator,
  viewMode: 'docs',
} as Meta;

type LoadingIndicatorProps = ComponentProps<typeof LoadingIndicator>;

const initialProps: LoadingIndicatorProps = {};

const Container = ({children}): JSX.Element => {
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

const LoadingIndicatorStory: Story<LoadingIndicatorProps> = (
  args,
): JSX.Element => {
  return (
    <Container>
      <LoadingIndicator {...args} />
    </Container>
  );
};

export const LoadingIndicatorTemplate = LoadingIndicatorStory.bind({});
LoadingIndicatorTemplate.args = initialProps;
