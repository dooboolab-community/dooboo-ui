import {
  Animated,
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {useCallback} from 'react';

import styled from '@emotion/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: 150,
    textAlign: 'left',
    alignItems: 'center',
    alignSelf: Platform.OS === 'web' ? 'flex-start' : 'center',
    position: 'absolute',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    bottom: 10,
    backgroundColor: '#87b5ff',
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

const MessageText = styled.Text`
  color: white;
`;

const ActionText = styled.Text`
  color: green;
`;

const ActionContainer = styled.View`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: -5px;
  padding-left: 16px;
`;

const Touchable = styled.TouchableOpacity``;

const ActionButton = styled.View`
  padding: 4px 4px 2px 2px;
`;

export interface SnackbarProps {
  testID?: string;
  ref: React.MutableRefObject<SnackbarRef>;
}

export interface SnackbarContent {
  text: string;
  actionText?: string;
  timer?: SnackbarTimer;
  actionStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  messageStyle?: StyleProp<TextStyle>;
  onPressAction?: () => void;
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
    actionText,
    messageStyle,
    actionStyle,
    containerStyle,
    timer = SnackbarTimer.SHORT,
    onPressAction,
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

  React.useImperativeHandle(ref, () => ({
    show,
  }));

  return (
    <>
      {showingState.isVisible && (
        <Animated.View
          testID={testID}
          style={[
            styles.container,
            {maxWidth: Dimensions.get('screen').width - 32},
            containerStyle,
            {opacity: fadeAnim},
          ]}>
          {/* @ts-ignore */}
          <MessageText style={messageStyle}>{text}</MessageText>
          {actionText && (
            <ActionContainer>
              <Touchable
                onPress={(): void => {
                  onPressAction && onPressAction();
                  hide();
                }}>
                <ActionButton>
                  {/* @ts-ignore */}
                  <ActionText style={actionStyle}>{actionText}</ActionText>
                </ActionButton>
              </Touchable>
            </ActionContainer>
          )}
        </Animated.View>
      )}
    </>
  );
};

const Snackbar =
  React.forwardRef<SnackbarRef, SnackbarProps>(SnackbarContainer);

export {Snackbar};
