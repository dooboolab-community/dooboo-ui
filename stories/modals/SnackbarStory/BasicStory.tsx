import {Button, Typography} from '../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {useDooboo} from '../../../main/providers';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function SnackbarStory(): ReactElement {
  const {snackbar} = useDooboo();

  return (
    <Container
      style={{
        flexDirection: 'column',

        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography.Title>Snackbar</Typography.Title>
      <Button
        color="primary"
        text="Snackbar"
        style={{marginTop: 60, width: 200}}
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
          })
        }
      />
      <Button
        color="primary"
        text="With action"
        style={{marginTop: 20, width: 200}}
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            actionText: 'Cancel',
          })
        }
      />
      <Button
        color="info"
        text="Color = info"
        style={{marginTop: 20, width: 200}}
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'info',
          })
        }
      />
      <Button
        color="danger"
        text="Color = danger"
        style={{marginTop: 20, width: 200}}
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'danger',
          })
        }
      />
      <Button
        color="light"
        text="Color = light"
        style={{marginTop: 20, width: 200}}
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'light',
          })
        }
      />
    </Container>
  );
}

export default SnackbarStory;
