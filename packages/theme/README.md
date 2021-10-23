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

### Usage in your app

```tsx
<ThemeProvider>
  <App> // Your app
</ThemeProvider>
```

Then manipulate your code with `emotion/native`.

```tsx
const Heading = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 14px;
`;
```

- Above code will change the color of the `Text` depending on the `themeType`.

### Using theme props

```tsx
import {useTheme} from '@dooboo-ui/theme';

const {theme, themeType} = useTheme();

<View style={theme.background} />;
```

- You can get `theme` props from the context api `useTheme`. Then you can manipulate your styles.

### Extending styles

1. Create your own `theme`.

   - [Example theme.ts](https://github.com/dooboolab/hackatalk/blob/master/client/src/theme.ts)

2. Declare style typings
   - [Example styled.d.ts](https://github.com/dooboolab/hackatalk/blob/master/client/src/styled.d.ts).

### Media support

`@dooboo-ui/theme` also supports `mediaQuery` with `isMobile`, `isTablet`, and `isDesktop` props. Example below.

```tsx
const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  ${({theme: {isMobile}}) =>
    isMobile &&
    css`
      flex: 1;
      margin-left: 48px;
    `}
`;
```

### Orientation support

If you also want to check the `orientation` change detection, you need to import `@expo/match-media` in root of your app.

```ts
import '@expo/match-media';
```

After that you can use `isPortrait` props in `@dooboo-ui/theme` to detect the orientation or your app. Example below.

```tsx
const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  ${({theme: {isPortrait}}) =>
    isPortrait &&
    css`
      flex: 1;
      margin-left: 48px;
    `}
`;
```
