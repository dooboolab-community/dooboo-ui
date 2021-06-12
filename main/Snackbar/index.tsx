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
import {DoobooTheme, light, withTheme} from '../theme';
import React, {useCallback} from 'react';

import styled from '@emotion/native';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  type?: SnackbarType;
};

export interface SnackbarProps {
  testID?: string;
  theme?: DoobooTheme;
  ref: React.MutableRefObject<SnackbarRef>;
}

export interface SnackbarContent {
  text: string;
  timer?: SnackbarTimer;
  styles?: Styles;
  actionText?: string;
  onActionPress?: () => void;
  type?: SnackbarType;
}

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

  background-color: ${({theme, type}) =>
    type === 'danger' ? theme.textContrast : theme.text};
`;

const SnackbarContainer = (
  props: SnackbarProps,
  ref: React.Ref<SnackbarRef>,
): React.ReactElement => {
  const {testID} = props;

  const [showingState, setShowingState] = React.useState<ShowingState>({
    isVisible: false,
    isShowing: false,
  });

  const [content, setContent] = React.useState<SnackbarContent>({
    text: '',
    timer: SnackbarTimer.SHORT,
  });

  const {
    text,
    type = 'default',
    actionText,
    onActionPress,
    styles,
    timer = SnackbarTimer.SHORT,
  } = content;

  const {isShowing, isVisible, timeout} = showingState;
  const [fadeAnim] = React.useState(new Animated.Value(0));

  const show = (c: SnackbarContent): void => {
    setContent(c);
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

  React.useEffect(() => {
    if (isShowing)
      if (isVisible) hide(50);
      else {
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
  }, [showingState, fadeAnim, hide, isShowing, isVisible, timer]);

  React.useImperativeHandle(ref, () => ({show}));

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
          ]}>
          <ButtonText style={styles?.text} type={type}>
            {text}
          </ButtonText>
          {actionText && <Divider type={type} />}
          {actionText && (
            <TouchableOpacity onPress={onActionPress}>
              <TextAction type={type}>{actionText}</TextAction>
            </TouchableOpacity>
          )}
        </SnackbarWrapper>
      )}
    </>
  );
};

const SnackbarComponent =
  React.forwardRef<SnackbarRef, SnackbarProps>(SnackbarContainer);

SnackbarComponent.defaultProps = {
  theme: light,
};

export const Snackbar = withTheme(SnackbarComponent);
