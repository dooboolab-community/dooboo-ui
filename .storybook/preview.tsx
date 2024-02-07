import React, {useState} from 'react';
import type {Preview} from '@storybook/react';
import {darkTheme, lightTheme} from './theme';
import {DocsContainer} from '@storybook/addon-docs';
import addons, {useChannel} from '@storybook/addons';

import {useDarkMode} from 'storybook-dark-mode';

export const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
    },
    docs: {
      // https://github.com/hipstersmoothie/storybook-dark-mode/issues/180#issuecomment-1140553924
      container: (props) => {
        const isDark = useDarkMode();
        const {id: storyId, storyById} = props.context;

        const {
          parameters: {docs = {}},
        } = storyById(storyId);

        docs.theme = isDark ? darkTheme : lightTheme;

        const currentProps = {...props, theme: isDark ? darkTheme : lightTheme};
        return React.createElement(DocsContainer, currentProps);
      },
    },
    options: {
      storySort: (a, b) => {
        const sectionA = a.id.split('-')[0];
        const sectionB = b.id.split('-')[0];
        if (sectionA === sectionB) {
          return a.name.localeCompare(b.name);
        }
        const sectionMap = {
          overview: 1,
          components: 2,
          modals: 3,
          packages: 4,
        };
        return (sectionMap[sectionA] || 0) - (sectionMap[sectionB] || 0);
      },
      /**
       * regex for finding the hierarchy separator
       * @example:
       *   null - turn off hierarchy
       *   /\// - split by `/`
       *   /\./ - split by `.`
       *   /\/|\./ - split by `/` or `.`
       * @type {Regex}
       */
      hierarchySeparator: /\/|\./,
      /**
       * regex for finding the hierarchy root separator
       * @example:
       *   null - turn off multiple hierarchy roots
       *   /\|/ - split by `|`
       * @type {Regex}
       */
      hierarchyRootSeparator: /\|/,
      isToolshown: true,
      showPanel: true,
      panelPosition: 'bottom',
    },
  },
};
