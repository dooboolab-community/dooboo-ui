import type {ComponentProps} from 'react';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {Accordion, DoobooProvider} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'Accordion',
  component: Accordion,
  viewMode: 'docs',
} as Meta;

const Template: Story<ComponentProps<typeof Accordion>> = (
  args,
): JSX.Element => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <Accordion {...args} />
    </DoobooProvider>
  );
};

export const AccordionBasic = Template.bind({});

AccordionBasic.args = {
  shouldAnimate: true,
  data: [
    {
      title: 'Accordion heading 1',
      items: ['User', 'Mail', 'Text'],
    },
    {
      title: 'Accordion heading 2',
      items: ['Movie', 'Image', 'File'],
    },
    {
      title: 'Accordion heading 3',
      items: ['TikTok', 'Youtube', 'Puzz'],
    },
  ],
};
