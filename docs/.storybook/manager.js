import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'dooboo-ui',
    brandUrl: 'https://dooboolab.github.io/dooboo-ui',
    brandImage: '/assets/icon.png',
    theme: themes.dark,
  })
})