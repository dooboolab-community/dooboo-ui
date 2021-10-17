# @dooboo-ui/theme

> Current package supports styling [react native](reactnative.dev) component in `light` and `dark` mode.

## Installation

```sh
yarn add @dooboo-ui/theme
```

## Usage

### Import

```tsx
import {ThemeProvider} from '@dooboo-ui/theme';
```

### Use in your app

```tsx
<ThemeProvider>
  <App> // Your app
</ThemeProvider>
```

### Using context api

```tsx
import {useTheme} from '@dooboo-ui/theme';

const {theme, themeType} = useTheme();

<View style={theme.background} />;
```

### Extending styles

1. Create your own `theme`.

   - [Example theme.ts](https://github.com/dooboolab/hackatalk/blob/master/client/src/theme.ts)

2. Declare style typings
   - [Example styled.d.ts](https://github.com/dooboolab/hackatalk/blob/master/client/src/styled.d.ts).
