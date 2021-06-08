import React, {useCallback, useRef, useState} from 'react';
import {
  Snackbar,
  SnackbarRef,
  SnackbarTimer,
  SwitchToggle,
} from '../../../main';
import {color, text} from '@storybook/addon-knobs';

import {Text} from 'react-native';
import styled from '@emotion/native';

const Container = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 28px;
  flex-direction: column;
`;

const ToggleContainer = styled.View`
  margin-bottom: 15px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  width: 230px;
  margin-bottom: 15px;
  padding: 10px;
  border-width: 2px;
`;

function SnackbarDefault(): React.ReactElement {
  const snackbar = useRef<SnackbarRef>(null);
  const [shortOrLong, setShortOrLong] = useState<boolean>(false);
  const [longText, setLongText] = useState<boolean>(false);
  const snackbarText = text('Snackbar Text', 'Simple Snackbar is opened');

  const snackbarLongText = text(
    'Snackbar Long Text',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quia vel maxime nost',
  );

  const containerColor = color('container color', '#1976D1');
  const messageColor = color('message color', '#ffffff');

  const onPress = useCallback((): void => {
    if (snackbar)
      snackbar.current?.show({
        text: longText ? snackbarLongText : snackbarText,
        timer: shortOrLong ? SnackbarTimer.LONG : SnackbarTimer.SHORT,
        containerStyle: {
          backgroundColor: containerColor,
        },
        messageStyle: {
          color: messageColor,
          fontSize: 17,
        },
      });
  }, [
    shortOrLong,
    longText,
    containerColor,
    messageColor,
    snackbar,
    snackbarLongText,
    snackbarText,
  ]);

  return (
    <Container>
      <Snackbar ref={snackbar} />
      <ToggleContainer>
        <Text>Timer</Text>
        <SwitchToggle
          switchOn={shortOrLong}
          onPress={(): void => setShortOrLong((prev) => !prev)}
        />
        <Text>SHORT / LONG</Text>
      </ToggleContainer>
      <ToggleContainer>
        <Text>Text</Text>
        <SwitchToggle
          switchOn={longText}
          onPress={(): void => setLongText((prev) => !prev)}
        />
        <Text>SHORT / LONG</Text>
      </ToggleContainer>
      <Button onPress={onPress}>
        <Text style={{textAlign: 'center'}}>OPEN SNACKBAR(Default)</Text>
      </Button>
    </Container>
  );
}

export default SnackbarDefault;
