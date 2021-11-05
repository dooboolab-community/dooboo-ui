## Changelogs

## 0.1.48

Enhance performance on [NetworkImage] (#163)

## 0.1.47

Fix the dark mode detection from iOS background (#162)

## 0.1.46

Add new props shouldImageRatioFixed to support image's own aspectRatio before render (#161)

## 0.1.45

hotfix: Update default ActivitiyIndicator color in [Button]

## 0.1.44

Remove `SelectBox` from `main` component.

- This decision was made because the mobile restricts multiple scrolling in the same directions. This will be added to `package` component along with modalbox in the future.

## 0.1.41

Revert default theme at `@dooboo-ui/theme` (#159)

- This design does not sync the theme provided in emotion styles. We would like to sync both theme props and if not possible, we would not want this design.

## 0.1.40

Upgrade project to expo sdk 43 (#158)

## 0.1.39

Organize packages and manage deps (#157)

- Update @dooboo-ui/theme readme and dependencies

- Organize packages and update installation guide

- Update installation readme for `expo`

## 0.1.38

#### Enhancement

The button loading color does not look correct in the current status. Avoid changing background.

The final result is below.
<img src="https://user-images.githubusercontent.com/27461460/137771323-24a153bf-a1ca-4be7-8da0-5f6749f8011c.gif" width="280"/>

##### Hotfix

Apply new migrated @dooboo-ui/theme package which starts from 0.3.3.

Organize dirty packages.

#### Packages

Apply new theme package to AlertDialog (#153)

## 0.1.35

#### Feature

- Add `setFontFamily` function to set global `fontFamily` (#138)

#### Enhancement

- Fix fallbackImage and loadingImage style (#127)

## 0.1.34

- hotfix: Fix layout styles in [NetworkImage] (#124)

## 0.1.33

- Rewrite NetworkImage (#123)
- Remove unecessary properties in Theme declaration (#121)
- Remove `jsxBracketSameLine` from prettier config for deprecation at v2.4 (#120)
- Remove nested component declaration in [AlertDialog] (#119)

## 0.1.32

### Features

- FAB (Floating Action Button)

  Newly added [#67](https://github.com/dooboolab/dooboo-ui/pull/67)

### Enhancement

- NetworkImage

  Organize props [#115](https://github.com/dooboolab/dooboo-ui/pull/115)

### Contributors

- [@yujong-lee](https://github.com/yujong-lee)
- [@wndudqus](https://github.com/wndudqus)

## 0.1.31

### Features

- Packages

  - **AlertDialog**

    Provide three types of dialog: alert, confirm, and prompt.
    You may try this by installing `@dooboo-ui/alert-dialog`.

### Enhancements

- **NetworkImage**
  - Error handling when image url is invaild or not found.
  - iOS and Android support when loading.
  - Overall code refactoring.

### Documentations

- **Newly Added**

  - [LoadingIndicator](https://dooboo-ui.dooboolab.com/?path=/docs/components-loadingindicator--page)
  - [IconButton](https://dooboo-ui.dooboolab.com/?path=/docs/components-iconbutton--page)
  - [SelectBox](https://dooboo-ui.dooboolab.com/?path=/docs/components-selectbox--page)

- **Enhancement**
  - [Button](https://dooboo-ui.dooboolab.com/?path=/docs/components-button--page)
    - Demo snack has been added 🍟

### Contributors

- Special thanks goes to [@yujong-lee](https://github.com/yujong-lee) for upgrading `NetworkImage` usability.
- Special thanks goes to [@do02reen24](https://github.com/do02reen24) for providing new package `@dooboo-ui/alert-dialog`.
- Special thanks goes to [@SOLBI1028](https://github.com/SOLBI1028) [@3Aldm0830](https://github.com/ldm0830), [@915dbfl](https://github.com/915dbfl) and [@devdubby](https://github.com/devdubby) for improving documentations.

## 0.1.30

1 More `dooboo-ui` icon

- follow-shape

## 0.1.29

Fix [SwitchToggle] error [#102](https://github.com/dooboolab/dooboo-ui/pull/102).

## 0.1.28

Rewrite [SwitchToggle] [#86](https://github.com/dooboolab/dooboo-ui/pull/86).

## 0.1.27

Implement [SelectBox] component [#73](https://github.com/dooboolab/dooboo-ui/pull/73)

- This leads to another peer dependency, [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler).

## 0.1.26

16 More `dooboo-ui` icons

- chevron-right-shape
- chevron-left-shape
- chevron-down-shape
- chevron-up-shape
- trash-light
- pen-light
- burger-shape
- dots-light
- wifi-unable-light
- wifi-light
- mic-shape
- mic-light
- phone-shape
- phone-light
- clip-shape
- clip-light

## 0.1.25

Add display maxLength to EditText [#75](https://github.com/dooboolab/dooboo-ui/pull/75)

- By [rarira](https://github.com/rarira) ✨

Replace style props to styles in [Accordion] [#69](https://github.com/dooboolab/dooboo-ui/pull/69)

- By [yujong-lee](https://github.com/yujong-lee) ✨

## 0.1.23

Detect orientation on media query [#68](https://github.com/dooboolab/dooboo-ui/pull/68)

## 0.1.22

Hotfix [SwitchToggle]. The `endPos` rely on the `paddingRight` when provided.

## 0.1.21

Hotfix [SwitchToggle]. The `padding` props overwrites to `paddingLeft`, `paddingRight`, `paddingTop` and `paddingBottom` in [emotion](https://emotion.sh/docs/introduction). Prevent `padding` value to be `undefined`.

## 0.1.20

Include [Button] type `light` [#41](https://github.com/dooboolab/dooboo-ui/pull/41).

## 0.1.19

Enhance `typings` in [ButtonGroup] to receive different props for data.

## 0.1.18

Add `comment-light` icon to `dooboo-ui` Icon.

## 0.1.17

Enhance `color` arrangement in [EditText] [#37](https://github.com/dooboolab/dooboo-ui/pull/37).

## 0.1.16

More `icons` added.

## 0.1.15

Expose `inputRef` in [EditText] to expose ability to customize behavior such as setting next focus.

## 0.1.14

Set default `theme` to [Accordion].

Expose `IconName` form [Icon] to provide types.

## 0.1.13

Fix [ButtonGroup] style props to styles.

This design aligns with other components.

## 0.1.12

Installing `dooboo-ui` font is hard to install for `react-native cli`. Make this process easier by installing it with `yarn react-native link`.

Fix [Icon] to receive `color` and `style` props.

## 0.1.11

Minor fix in styles.

[Button]

- Set proper defalut background when `loading`.

[SnackBar]

- Set smaller vertical padding on container.

## 0.1.10

Add [NetworkImage] to main component (#30)

Minor fixes on [Snackbar] UI (088c3e2247cc120e5db2044bc91e5304f939e8bd)

## 0.1.9

Add [Snackbar] to `main` package [#28](https://github.com/dooboolab/dooboo-ui/pull/28).

Apply updated colors of design [#29](https://github.com/dooboolab/dooboo-ui/pull/29).

## 0.1.7

Add [RadioGroup] [#26](https://github.com/dooboolab/dooboo-ui/commit/39b9138a60a697f34fc6da422bb26ca8dd6ee325).

## 0.1.6

All components renewed in `V2` which starts from version `0.1.0`.

The previous version lasts in `0.8.0` and this is al so transffered to [dooboo-ui-legacy](https://www.google.com/search?q=dooboo-ui-legacy&oq=dooboo-ui-legacy&aqs=chrome..69i57j69i60l3.4653j0j7&sourceid=chrome&ie=UTF-8).

- [SwitchToggle] added [#25](https://github.com/dooboolab/dooboo-ui/pull/25).

## 0.1.5

Fix [StatusBarBrightness] component which did not realize `theme`.
