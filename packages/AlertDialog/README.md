# AlertDialog

## Props

| Props                | Types                                       | Required | Default |
| -------------------- | ------------------------------------------- | -------- | ------- |
| isOpen               | boolean                                     | optional | false   |
| type                 | 'alert' \| 'confirm' \| 'prompt'            | optional | 'alert' |
| title                | string                                      | optional | -       |
| content              | string                                      | optional | -       |
| styles               | Styles                                      | optional | {}      |
| backdropOpacity      | number                                      | optional | 0.5     |
| backdropPressToClose | number                                      | optional | True    |
| onPress              | (result: boolean \| string \| null) => void | Required | -       |

## Installation

```
yarn add @dooboo-ui/alert-dialog
```
