# AlertDialog

## Props

| Props                  | Types                                         | Required | Default |
| ---------------------- | --------------------------------------------- | -------- | ------- |
| isOpen                 | boolean                                       | optional | false   |
| type                   | 'alert' \| 'confirm' \| 'prompt'              | optional | 'alert' |
| title                  | string                                        | optional | -       |
| content                | string                                        | optional | -       |
| styles                 | ModalProps['style']                           | optional | {}      |
| backdropOpacity        | number                                        | optional | 0.5     |
| backdropPressToClose   | number                                        | optional | True    |
| renderPrimaryButton    | (onPress: VoidFunction) => React.ReactElement | optional | -       |
| renderAdditionalButton | (onPress: VoidFunction) => React.ReactElement | optional | -       |
| onPress                | (result: boolean \| string \| null) => void   | Required | -       |

## Installation

```
yarn add @dooboo-ui/alert-dialog
```
