// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';

import {Button, Typography} from '../../../main';
import {useDooboo} from '../../../main/providers';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function SnackbarBasicStory(): JSX.Element {
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
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
          })
        }
        style={{marginTop: 60, width: 200}}
        text="Snackbar"
      />
      <Button
        color="primary"
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            actionText: 'Cancel',
          })
        }
        style={{marginTop: 20, width: 200}}
        text="With action"
      />
      <Button
        color="info"
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'info',
          })
        }
        style={{marginTop: 20, width: 200}}
        text="Color = info"
      />
      <Button
        color="danger"
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'danger',
          })
        }
        style={{marginTop: 20, width: 200}}
        text="Color = danger"
      />
      <Button
        color="light"
        onPress={() =>
          snackbar.open({
            text: 'Hello there!',
            color: 'light',
          })
        }
        style={{marginTop: 20, width: 200}}
        text="Color = light"
      />
    </Container>
  );
}

export default SnackbarBasicStory;
