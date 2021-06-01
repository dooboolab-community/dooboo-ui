## Changelogs

## 0.0.51

- [PinchZoom] added in `dooboo-ui` package.

## 0.0.50

[ThemeProvider]

- Fixed theme variable changing issue
- Related https://github.com/facebook/react-native/issues/28525.

## 0.0.48

[StatusBarBrightness]

- Set default `themeType`.

[ThemeProvider]

- Set default themeType with `colorScheme`.

## 0.0.47

[StatusBarBrightness]

- Newly added [StatusBarBrightness] to control `StatusBar`'s brightnes in mobile.

## 0.0.45

[EditText]

- Added missing callBack props `onSubmitEditing`.
- Set default `placeholderColor`.
- Added `labelColor`.
- Dark mode example in story.

- ## 0.0.43

[EditText]

- Fixed hovering issue in `0.0.42` in `column` type. Also fixed where `hover` style should be applied. Previously it was a `container` but it should be applied to the first child `View`.

## 0.0.42

[EditText]

- Fixed hover line appearing below the `errorText`.

## 0.0.41

[EditText]

- Fixed default `borderBottomWidth` to 0.5.

## 0.0.40

[Theme]

- Added missing `media` type in `theme`.

## 0.0.39

[Theme]

- Deprecated [@dooboo-ui/theme](https://www.npmjs.com/package/@dooboo-ui/theme) and included in `dooboo-ui` package itself.
  - This decision was made to unify the theme props used internally.

[EditText]

- Use theme props in default styling.

[Button]

- Use theme props in default styling.

## 0.0.38

[EditText]

- Use `useRef` for hover only in web env.
- Tests fixes. When `await` is used more than once, `native-testing-library` emits error.[Reference](https://github.com/callstack/react-native-testing-library/issues/379#issuecomment-672932435)
- Refactored [EditText] tests with 100% coverage.
- Removed `@react-native-async-storage/async-storage` from core dependency.

## 0.0.37

[EditText]

- Disable hover in when not editable.

[Button]

- tests coverage to 100%.
- Use `useRef` for hover only in web env.

- ## 0.0.36

- Added hover style to [EditText] and also `labelText` hover style. Fixed padding style in [Button]. Previously, default padding was applied in `text` which was hard to detect. Manage to have default pad styles in a container instead. [#374](https://github.com/dooboolab/dooboo-ui/pull/374)

## 0.0.35

- Fix correct [Button] `onPress` type

## 0.0.34

- Removed default `flex: 1` in [EditText] - style

## 0.0.32

- Removed `flex: 1` [EditText] - column

## 0.0.31

- Refactored [EditText] to more concise way as how it is done in [Button]

## 0.0.30

- Update [Button] web styles
- Updated bracket spacing rules for eslint and prettier

## 0.0.29

- Added `TouchableOpacity` style prop to [Button] [#372](https://github.com/dooboolab/dooboo-ui/pull/372).

## 0.0.27

- Updated packages and applied new linting rules [#370](https://github.com/dooboolab/dooboo-ui/pull/370).

## 0.0.26

- Simplified [Button] style props in [commit](https://github.com/dooboolab/dooboo-ui/pull/369/commits/6f056bfa0c182b34bc1468666e066fd7613675fa).
- Organize readmes and folder structures [#369](https://github.com/dooboolab/dooboo-ui/pull/369).

## 0.0.25

- Enhancements on [PinchZoom] and [Rating].

## 0.0.24

- Add ability to customize text with textProps in [Button].

## 0.0.23

- Renamed CheckBox dir to Checkbox and fix import error.
- Type enhancement on [Badge] [#359](https://github.com/dooboolab/dooboo-ui/pull/359)

## 0.0.22

- Major refactoring on [Button], [EditText] and various works given by contributions. Fixes import bug on [Checkbox]. Move [PinchZoom] and [DatePicker] to packages.
  Reorganize assets for main and packages. For packages, it should go inside its root while main direct to \_\_assets in the same dir.

## 0.0.21

- Upgrade expo sdk to 39 which has reac-native version of 0.63+ [#355](https://github.com/dooboolab/dooboo-ui/pull/355)

## 0.0.18

- Major refactor [Accordion], Add `renderTitle`, `renderBody`, `titleContainerStyle`, `bodyContainerStyle` and etc [#321](https://github.com/dooboolab/dooboo-ui/pull/321)
- Fixed [Button] to render correctly. Fixed wrongly placed `testID`.
- [EditText] doesn't need default type any more. `Column` is default.

## 0.0.15

- Add `contentStyle` to [EditText] [#264](https://github.com/dooboolab/dooboo-ui/pull/264)
- Types fixes
- Changed all the import paths in more concise way [#270](https://github.com/dooboolab/dooboo-ui/pull/270).
- Renamed `Item` to `SelectItem` and fixes import pathes [#265](https://github.com/dooboolab/dooboo-ui/issues/265)

## 0.0.11

- Fix regression in [EditText] [#262](https://github.com/dooboolab/dooboo-ui/pull/262)
- Fix regression in [Button]

## 0.0.3

- Support RTL for [SwitchToggle] [#251](https://github.com/dooboolab/dooboo-ui/pull/251)
- Refactor [SearchInput] and re-designed [#241](https://github.com/dooboolab/dooboo-ui/pull/241)
- Refactor and redesign [Accordion] 🔥🔥🔥🔥 👈
  - [#226](https://github.com/dooboolab/dooboo-ui/pull/226), [#215](https://github.com/dooboolab/dooboo-ui/pull/215), [#216](https://github.com/dooboolab/dooboo-ui/pull/216), [#239](https://github.com/dooboolab/dooboo-ui/pull/239).
- Add hover option to [Button] [#237](https://github.com/dooboolab/dooboo-ui/pull/237)
- [EditText] enhancement [#234](https://github.com/dooboolab/dooboo-ui/pull/234)

## 0.0.2

- Fix `Accordion` error on `ios` in [#214](https://github.com/dooboolab/dooboo-ui/pull/214)

## 0.0.1

- The rise of `dooboo-ui`
