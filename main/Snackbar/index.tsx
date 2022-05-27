import {
  Animated,
  Dimensions,
  Platform,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  ButtonText,
  SnackbarType,
  SnackbarWrapper,
} from '../Styled/StyledComponents';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

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

interface ShowingState {
  isVisible?: boolean;
  isShowing?: boolean;
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
    type === 'danger' ? theme.textContrast : theme.text};
`;

const Divider = styled.View<{type: SnackbarType}>`
  width: 1px;
  height: 100%;
  margin: 0 16px;
  opacity: 0.4;

  background-color: ${({theme, type}) =>
    type === 'danger' ? theme.textContrast : theme.text};
`;

const SnackbarContainer = (
  props: SnackbarProps,
  ref: React.Ref<SnackbarRef>,
): React.ReactElement => {
  const {testID} = props;

  const [showingState, setShowingState] = useState<ShowingState>({
    isVisible: false,
    isShowing: false,
  });

  const [snackbar, setSnackbar] = useState<SnackbarContent>({
    content: {text: ''},
    timer: SnackbarTimer.SHORT,
  });

  const {
    content,
    type = 'default',
    actionText,
    onActionPress,
    styles,
    timer = SnackbarTimer.SHORT,
  } = snackbar;

  const {theme} = useTheme();

  const {isShowing, isVisible, timeout} = showingState;
  const [fadeAnim] = useState(new Animated.Value(0));

  const show = (c: SnackbarContent): void => {
    setSnackbar(c);
    timeout && clearTimeout(timeout);

    setShowingState((prevState) =>
      Object.assign(Object.assign({}, prevState), {isShowing: true}),
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
        setShowingState((prevState) =>
          Object.assign(Object.assign({}, prevState), {isVisible: false}),
        ),
      );
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (isShowing) {
      if (isVisible) {
        hide(50);
      } else {
        const hideTimeout = setTimeout(() => {
          hide();
        }, timer + 200);

        setShowingState({
          isShowing: false,
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
  }, [showingState, fadeAnim, hide, isShowing, isVisible, timer]);

  useImperativeHandle(ref, () => ({show}));

  return (
    <>
      {showingState.isVisible && (
        <SnackbarWrapper
          testID={testID}
          type={type}
          style={[
            styles?.container,
            {
              shadowColor: 'black',
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
          {actionText && (
            <Divider
              theme={theme}
              type={type}
              style={{
                height: Platform.select({web: 24, default: 12}),
              }}
            />
          )}
          {actionText && (
            <TouchableOpacity onPress={onActionPress}>
              <TextAction theme={theme} type={type} style={styles?.text}>
                {actionText}
              </TextAction>
            </TouchableOpacity>
          )}
        </SnackbarWrapper>
      )}
    </>
  );
};

export const Snackbar =
  React.forwardRef<SnackbarRef, SnackbarProps>(SnackbarContainer);
