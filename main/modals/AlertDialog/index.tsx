import {Modal, StyleSheet} from 'react-native';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {cloneElement, forwardRef, useImperativeHandle, useState} from 'react';

import {Button} from '../../components/Button';
import {Icon} from '../../components/Icon';
import type {ReactElement} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Typography} from '../../components/Typography';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

const AlertDialogContainer = styled.View`
  flex: 0.8;
  background-color: ${({theme}) => theme.bg.basic};
  padding: 24px 24px 28px 28px;
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
  margin-bottom: 20px;
`;

const ActionRow = styled.View`
  margin-top: 20px;
  padding-right: 4px;
  flex-direction: row;
`;

export type AlertDialogProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  ref: React.MutableRefObject<AlertDialogContext>;
};

export type AlertDialogStyles = {
  container?: StyleProp<ViewStyle>;
  titleContainer?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  bodyContainer?: StyleProp<ViewStyle>;
  body?: StyleProp<TextStyle>;
  actionContainer?: StyleProp<ViewStyle>;
};

export type AlertDialogOptions = {
  styles?: AlertDialogStyles;
  title?: string;
  body?: string;
  backdropOpacity?: number;
  closeOnTouchOutside?: boolean;
  actions?: ReactElement[];
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
  const {theme, themeType} = useTheme();

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

  const {
    backdropOpacity = 0.2,
    title,
    body,
    styles,
    actions,
    closeOnTouchOutside = true,
  } = options ?? {};

  const AlertDialogContent = (
    <Container
      style={{
        backgroundColor:
          themeType === 'light'
            ? `rgba(0,0,0,${backdropOpacity})`
            : `rgba(255,255,255,${backdropOpacity})`,
      }}
    >
      <AlertDialogContainer
        style={StyleSheet.flatten([
          {
            shadowOffset: {width: 0, height: 4},
            shadowColor: theme.text.basic,
          },
          styles?.container,
        ])}
      >
        <TitleRow style={styles?.titleContainer}>
          <Typography.Heading1 style={styles?.title}>
            {title}
          </Typography.Heading1>
          <Button
            type="text"
            onPress={() => setVisible(false)}
            text={
              <Icon name="cross-light" size={18} color={theme.text.basic} />
            }
          />
        </TitleRow>
        <BodyRow style={styles?.bodyContainer}>
          <Typography.Body1 style={styles?.body}>{body}</Typography.Body1>
        </BodyRow>
        {actions ? (
          <ActionRow style={styles?.actionContainer}>
            {actions.map((action, index) =>
              cloneElement(action, {
                style: {
                  flex: 1,
                  marginLeft: index !== 0 ? 6 : 0,
                },
              }),
            )}
          </ActionRow>
        ) : null}
      </AlertDialogContainer>
    </Container>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      style={style}
    >
      {closeOnTouchOutside ? (
        <TouchableWithoutFeedback
          style={{flex: 1}}
          containerStyle={{flex: 1}}
          onPress={() => setVisible(false)}
        >
          {AlertDialogContent}
        </TouchableWithoutFeedback>
      ) : (
        AlertDialogContent
      )}
    </Modal>
  );
}

export default forwardRef<AlertDialogContext, AlertDialogProps>(AlertDialog);
