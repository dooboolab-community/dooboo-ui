import type {StyleProp, ViewStyle} from 'react-native';
import {forwardRef, useImperativeHandle, useState} from 'react';

import {Button} from '../../components/Button';
import {Icon} from '../../components/Icon';
import {Modal} from 'react-native';
import type {ReactElement} from 'react';
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

const Content = styled.View`
  flex: 0.8;
  background-color: ${({theme}) => theme.bg.basic};
  padding: 28px 24px 28px 28px;
  border-radius: 8px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BodyRow = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 40px;
`;

const ActionRow = styled.View`
  padding-right: 4px;
  flex-direction: row;
`;

export type AlertDialogProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  ref: React.MutableRefObject<AlertDialogContext>;
};

export type AlertDialogOptions = {
  title?: string;
  body?: string;
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

  const {backdropOpacity, title, body} = options ?? {};

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
          <TitleRow>
            <Typography.Heading1>{title}</Typography.Heading1>
            <Button
              type="text"
              onPress={() => setVisible(false)}
              text={
                <Icon name="cross-light" size={18} color={theme.text.basic} />
              }
            />
          </TitleRow>
          <BodyRow>
            <Typography.Body1>{body}</Typography.Body1>
          </BodyRow>
          <ActionRow>
            <Button
              style={{flex: 1}}
              text="OK"
              onPress={() => setVisible(false)}
            />
          </ActionRow>
        </Content>
      </Container>
    </Modal>
  );
}

export default forwardRef<AlertDialogContext, AlertDialogProps>(AlertDialog);
