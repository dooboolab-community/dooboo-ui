import React from 'react';
import type {Preview} from '@storybook/react';
import {darkTheme, lightTheme} from './theme';
import {DocsContainer} from '@storybook/addon-docs';

import {useDarkMode} from 'storybook-dark-mode';

const preview: Preview = {
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
      container: ({children, context}) => (
        <DocsContainer
          context={{
            ...context,
            storyById: (id) => {
              const storyContext = context.storyById(id);
              return {
                ...storyContext,
                parameters: {
                  ...storyContext?.parameters,
                  docs: {
                    ...storyContext?.parameters?.docs,
                    theme: useDarkMode() ? darkTheme : lightTheme,
                  },
                },
              };
            },
          }}
        >
          {children}
        </DocsContainer>
      ),
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
          packages: 3,
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
      panelPosition: "bottom",
    },
  },
};

export default preview;