# AlertDialog

## Props

| Props                | Types                                       | Required | Default   |
| -------------------- | ------------------------------------------- | -------- | --------- |
| isOpen               | boolean                                     | optional | false     |
| type                 | 'alert' \| 'confirm' \| 'prompt'            | optional | 'alert'   |
| color                | string                                      | optional | '#000000' |
| styles               | Styles                                      | optional | {}        |
| backdropOpacity      | number                                      | optional | 0.5       |
| backdropPressToClose | number                                      | optional | True      |
| children             | React.ReactNode                             | optional | -         |
| onPress              | (result: boolean \| string \| null) => void | Required | -         |

## Installation

```
yarn add dooboo-ui
```

or

```
yarn add @dooboo-ui/alert-dialog
```
