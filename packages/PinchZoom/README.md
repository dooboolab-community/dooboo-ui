# PinchZoom

> [PinchZoom] has ability to zoom in / out images or component.

#### Preview

![pinchzoom](https://user-images.githubusercontent.com/50297117/136137789-b65265d6-6580-4465-9adb-f29d0ed44d46.gif)

## Props

| Props                   | Types                                         | Required | Default |
| ----------------------- | --------------------------------------------- | -------- | ------- |
| style                   | ViewStyle                                     | optional | -       |
| onScaleChanged          | (_value_: _number_): void                     | optional | -       |
| onTranslateChanged      | (_valueXY_: {x: _number_; y: _number_}): void | optional | -       |
| onRelease               | void                                          | optional | -       |
| allowEmpty              | {x?: _boolean_; y?: _boolean_}                | optional | -       |
| fixOverflowAfterRelease | boolean                                       | optional | true    |

## Installation

```
yarn add @dooboo-ui/pinch-zoom
```
