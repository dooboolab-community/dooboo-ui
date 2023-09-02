import type {ComponentProps} from 'react';
import {action} from '@storybook/addon-actions';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, IconButton} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'IconButton',
  component: IconButton,
  viewMode: 'docs',
} as Meta;

type IconButtonProps = ComponentProps<typeof IconButton>;

const initialProps: IconButtonProps = {
  onPress: action('icon btn clicked'),
  icon: 'Airplane',
};

const Container = ({children}): JSX.Element => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      {children}
    </DoobooProvider>
  );
};

const IconButtonStory: Story<IconButtonProps> = (args): JSX.Element => {
  return (
    <Container>
      <IconButton {...args} />
    </Container>
  );
};

export const IconButtonTemplate = IconButtonStory.bind({});
IconButtonTemplate.args = initialProps;
