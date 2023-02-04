import type {StyleProp, ViewStyle} from 'react-native';
import {forwardRef, useImperativeHandle, useState} from 'react';

import {Icon} from '../../components/Icon';
import {Modal} from 'react-native';
import type {ReactElement} from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Typography} from '../../components/Typography';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.7;

  flex-direction: row;
`;

const TitleRow = styled.View`
  flex-direction: row;
`;

const Content = styled.View`
  flex: 0.8;
  background-color: ${({theme}) => theme.bg.basic};
  padding: 28px;
  border-radius: 8px;
`;

export type AlertDialogProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  ref: React.MutableRefObject<AlertDialogContext>;
};

export type AlertDialogOptions = {
  title?: string;
  backdropOpacity?: number;
};

export type AlertDialogContext = {
  open(alertDialogOptions?: AlertDialogOptions): void;
  close(): void;
};

function AlertDialog(
  {style}: AlertDialogProps,
  ref: React.Ref<AlertDialogContext>,
): ReactElement {
  const [options, setOptions] = useState<AlertDialogOptions | null>(null);
  const [visible, setVisible] = useState(false);
  const {theme} = useTheme();

  useImperativeHandle(ref, () => ({
    open: (alertDialogOptions) => {
      setVisible(true);
      if (alertDialogOptions) {
        setOptions(alertDialogOptions);
      }
    },
    close: () => {
      setVisible(false);
      setOptions(null);
    },
  }));

  const {backdropOpacity, title} = options ?? {};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={style}
    >
      <Container style={{opacity: backdropOpacity}}>
        <Content
          style={{
            shadowOffset: {width: 0, height: 4},
            shadowColor: theme.text.basic,
          }}
        >
          <TouchableHighlight onPress={() => setVisible(false)}>
            <TitleRow>
              <Icon
                name="chevron-left-light"
                size={24}
                color={theme.text.basic}
                style={{marginRight: 12}}
              />
              <Typography.Heading1>{title}</Typography.Heading1>
            </TitleRow>
          </TouchableHighlight>
        </Content>
      </Container>
    </Modal>
  );
}

export default forwardRef<AlertDialogContext, AlertDialogProps>(AlertDialog);
