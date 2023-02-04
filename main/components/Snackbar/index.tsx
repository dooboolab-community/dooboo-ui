import {Animated, Dimensions, Platform, TouchableOpacity} from 'react-native';
import {ButtonText, SnackbarWrapper} from '../Styled/StyledComponents';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import type {ReactElement} from 'react';
import type {SnackbarType} from '../Styled/StyledComponents';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  type?: SnackbarType;
};

export interface SnackbarProps {
  testID?: string;
  ref: React.MutableRefObject<SnackbarRef>;
}

export type SnackbarContent = {
  timer?: SnackbarTimer;
  styles?: Styles;
  actionText?: string;
  onActionPress?: () => void;
  type?: SnackbarType;
  content: {element?: ReactElement; text?: string};
};

interface OpenState {
  isVisible?: boolean;
  isOpen?: boolean;
  timeout?: any;
}

export interface SnackbarRef {
  show(content: SnackbarContent): void;
}

export enum SnackbarTimer {
  SHORT = 1500,
  LONG = 3000,
}

const TextAction = styled.Text<{type: SnackbarType}>`
  color: ${({theme, type}) =>
    type === 'danger' ? theme.text.contrast : theme.text.basic};
`;

const Divider = styled.View<{type: SnackbarType}>`
  width: 1px;
  height: 100%;
  margin: 0 16px;
  opacity: 0.4;

  background-color: ${({theme, type}) =>
    type === 'danger' ? theme.text.contrast : theme.text.basic};
`;

const SnackbarContainer = (
  props: SnackbarProps,
  ref: React.Ref<SnackbarRef>,
): ReactElement | null => {
  const {testID} = props;

  const [openState, setOpened] = useState<OpenState>({
    isVisible: false,
    isOpen: false,
  });

  const [snackbar, setSnackbar] = useState<SnackbarContent>({
    content: {text: ''},
    timer: SnackbarTimer.SHORT,
  });

  const {
    content,
    type = 'primary',
    actionText,
    onActionPress,
    styles,
    timer = SnackbarTimer.SHORT,
  } = snackbar;

  const {theme} = useTheme();

  const {isOpen, isVisible, timeout} = openState;
  const [fadeAnim] = useState(new Animated.Value(0));

  const show = (c: SnackbarContent): void => {
    setSnackbar(c);
    timeout && clearTimeout(timeout);

    setOpened((prevState) =>
      Object.assign(Object.assign({}, prevState), {isOpen: true}),
    );
  };

  const hide = useCallback(
    (duration = 200): void => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration,
        useNativeDriver: Platform.select({
          web: false,
          default: true,
        }),
      }).start(() =>
        setOpened((prevState) =>
          Object.assign(Object.assign({}, prevState), {isVisible: false}),
        ),
      );
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (isOpen) {
      if (isVisible) {
        hide(50);
      } else {
        const hideTimeout = setTimeout(() => {
          hide();
        }, timer + 200);

        setOpened({
          isOpen: false,
          isVisible: true,
          timeout: hideTimeout,
        });

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: Platform.select({
            web: false,
            default: true,
          }),
        }).start();
      }
    }
  }, [openState, fadeAnim, hide, isOpen, isVisible, timer]);

  useImperativeHandle(ref, () => ({show}));

  return openState.isVisible ? (
    <SnackbarWrapper
      testID={testID}
      type={type}
      style={[
        styles?.container,
        {
          shadowColor: theme.text.basic,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
        {maxWidth: Dimensions.get('screen').width - 40},
        {opacity: fadeAnim},
      ]}
    >
      {content.element ? (
        content.element
      ) : (
        <ButtonText style={styles?.text} type={type}>
          {content.text}
        </ButtonText>
      )}
      {actionText ? (
        <Divider
          theme={theme}
          type={type}
          style={{height: Platform.select({web: 24, default: 12})}}
        />
      ) : null}
      {actionText ? (
        <TouchableOpacity onPress={onActionPress}>
          <TextAction theme={theme} type={type} style={styles?.text}>
            {actionText}
          </TextAction>
        </TouchableOpacity>
      ) : null}
    </SnackbarWrapper>
  ) : null;
};

export const Snackbar =
  forwardRef<SnackbarRef, SnackbarProps>(SnackbarContainer);
