import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';

import {Button, Typography} from '../../../main';
import {useDooboo} from '../../../main/providers';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function AlertDialogBasicStory(): ReactElement {
  const {alertDialog} = useDooboo();

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
      <Typography.Title>AlertDialog</Typography.Title>
      <Button
        color="primary"
        text="Dialog"
        style={{marginTop: 60, width: 200}}
        onPress={() =>
          alertDialog.open({
            title: 'Hello there!',
            body: 'This is an alert dialog.',
          })
        }
      />
      <Button
        color="primary"
        text="With actions"
        style={{marginTop: 20, width: 200}}
        onPress={() =>
          alertDialog.open({
            title: 'Hello there!',
            body: 'This is an alert dialog.',
            actions: [
              <Button
                text="Cancel"
                color="light"
                onPress={() => alertDialog.close()}
              />,
              <Button text="OK" onPress={() => alertDialog.close()} />,
            ],
          })
        }
      />
    </Container>
  );
}

export default AlertDialogBasicStory;
