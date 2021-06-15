import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'dooboo-ui',
    brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  })
})