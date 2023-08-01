```tsx
import {Meta} from '@storybook/addon-docs';

<Meta title="Overview/Theming" />
```

# Theming

> The `theme` module easily provides the ability to create `light` and `dark` themes.

## Installation

### 1. Import

```ts
import {DoobooProvider} from 'dooboo-ui';
```

- If you only want to use the `theme` package, you can install it separately.

```ts
import {ThemeProvider} from '@dooboo-ui/theme';
```

> Then use `useTheme` from `@dooboo-ui/theme`.

### 2. Wrap your component with `DoobooProvider`

```tsx
<DoobooProvider>
  <App />
</DoobooProvider>
```

## Usage

### 1. Import `useDooboo`

```ts
import {useDooboo} from 'dooboo-ui';
```

### 2. Retrieve theme and use it

```ts
const {theme} = useDooboo();
```

Then use theme props inside your component:

```ts
{
  backgroundColor: theme.background,
  borderBottomColor: theme.primaryLight,
}
```

### Emotion support

You can also use the theme with [emotion](https://emotion.sh/docs/@emotion/native):

```tsx
const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.bg.basic};

  flex-direction: column;
  align-items: center;
`;
```

### Expo Config

For Expo app configuration, set `userInterfaceStyle` to `automatic`:

```ts
userInterfaceStyle: 'automatic',
```

Certainly! Here's the revised content with the "Persistent Color Scheme" section linked properly:

## Tips

### System UI Background
The `@dooboo-ui/theme` package assists in managing the color of the topmost element in a React Native screen. However, if the native background color remains white and you change the theme color to black, you may temporarily see the white native background during transitions, such as when switching between landscape/portrait modes. To avoid this, you can use [expo-system-ui](https://github.com/expo/expo/tree/sdk-49/packages/expo-system-ui). Learn how to use it in the section on [Persistent Color Scheme](#Persistent-Color-Scheme).

### Persistent Color Scheme
By default, dooboo-ui checks the device's color scheme and assigns a color that matches the theme. However, app developers might want to set the color persistently. For instance, even if a device is set to light mode, when a user sets the app to dark theme, the app should display in dark theme. To achieve this, you can install additional packages like [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) and proceed as shown below:

```tsx
useEffect(() => {
  const initializeThemeType = async (): Promise<void> => {
    const darkMode = await AsyncStorage.getItem(AsyncStorageKey.DarkMode);
    const isDarkMode = darkMode && darkMode === 'true';

    // Change app background color
    SystemUI.setBackgroundColorAsync(
      isDarkMode ? dark.bg.basic : light.bg.basic,
    );

    setLocalThemeType(isDarkMode ? 'dark' : 'light');
  };

  initializeThemeType();
}, []);
```

After that, specify the `initialThemeType` as shown below:

```tsx
<DoobooProvider
  themeConfig={{
    initialThemeType: localThemeType,
    customTheme: theme,
  }}
>
  ...
```

## Customizing Theme

### 1. Define colors for `light` and `dark` theme

The `light` and `dark` theme color definitions are provided as examples above. They are objects that contain color properties for different UI components and states.

### 2. Integrating with `DoobooProvider`

When integrating with `DoobooProvider`, you will provide your defined light and dark themes as the custom theme:

```tsx
<DoobooProvider customTheme={{light, dark}}>
  <App />
</DoobooProvider>
```

**Note:** If you're using `@dooboo-ui/theme` separately, opt for `ThemeProvider` instead of `DoobooProvider`.

### 3. TypeScript Support with Emotion

To get TypeScript support with [emotion](https://emotion.sh/docs/typescript#define-a-theme), you should declare your theme types and extend the default ones:

```typescript
import type {DoobooTheme} from 'dooboo-ui';
import {Theme} from './theme';

type AllTheme = Theme & DoobooTheme;

declare module '@emotion/react' {
  export interface Theme extends AllTheme {}
}

declare module 'dooboo-ui' {
  export interface DoobooTheme extends AllTheme {}
}
```

This ensures that when you're using styled components with Emotion, the theme's properties are correctly typed.

### 4. Media Support with `@dooboo-ui/theme`

`@dooboo-ui/theme` provides media query props to make it easier to design responsive UI:

**In Styled Components:**

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

**Directly Inside React Components:**

You can directly use media query props inside your React components for conditional styling:

```tsx
import {View} from 'react-native';
import {Typography, useDooboo} from 'dooboo-ui';

export default function Home(): JSX.Element {
  const { media: {isDesktop} } = useDooboo();

  return (
    <View>
      <Typography.Heading1
        style={{
          fontSize: isDesktop ? 30 : 20,
        }}
      >
        Hello World
      </Typography.Heading1>
    </View>
  )
```

### Orientation Support with `@dooboo-ui/theme`

To detect orientation changes, integrate with `@expo/match-media`.

1. **Installation:**

```sh
yarn add @expo/match-media
```

2. **Initialization:**

Import at your project root:

```typescript
import '@expo/match-media';
```

3. **Usage:**

Using `@dooboo-ui/theme`, you can detect orientation:

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
