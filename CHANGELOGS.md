## Changelogs

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
