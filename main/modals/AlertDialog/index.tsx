import type {ReactElement} from 'react';
import React, {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import {Button} from '../../uis/Button';
import {Icon} from '../../uis/Icon';
import {Typography} from '../../uis/Typography';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

const AlertDialogContainer = styled.View`
  flex: 0.87;
  background-color: ${({theme}) => theme.bg.basic};
  padding: 20px 20px 28px 24px;
  border-radius: 8px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BodyRow = styled.View`
  margin-top: 12px;
  margin-bottom: 8px;
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
  title?: string | ReactElement;
  body?: string | ReactElement;
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
      style={css`
        background-color: ${themeType === 'light'
          ? `rgba(0,0,0,${backdropOpacity})`
          : `rgba(255,255,255,${backdropOpacity})`};
      `}
    >
      <AlertDialogContainer
        style={StyleSheet.flatten([
          Platform.OS !== 'web' && {
            shadowOffset: {width: 0, height: 4},
            shadowColor: theme.text.basic,
          },
          styles?.container,
        ])}
      >
        <TitleRow style={styles?.titleContainer}>
          {typeof title === 'string' ? (
            <Typography.Heading3 style={styles?.title}>
              {title}
            </Typography.Heading3>
          ) : (
            title
          )}
          <Button
            type="text"
            onPress={() => setVisible(false)}
            text={<Icon name="X" size={18} color={theme.text.basic} />}
          />
        </TitleRow>
        <BodyRow style={styles?.bodyContainer}>
          {typeof body === 'string' ? (
            <Typography.Body3 style={styles?.body}>{body}</Typography.Body3>
          ) : (
            body
          )}
        </BodyRow>
        {actions ? (
          <ActionRow style={styles?.actionContainer}>
            {actions.map((action, index) =>
              cloneElement(action, {
                key: `action-${index}`,
                style: {
                  flex: 1,
                  marginLeft: index !== 0 ? 12 : 0,
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
      style={[
        css`
          flex: 1;
          align-self: stretch;
        `,
        style,
      ]}
    >
      {closeOnTouchOutside ? (
        <TouchableWithoutFeedback
          style={css`
            flex: 1;
          `}
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
