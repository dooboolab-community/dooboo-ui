// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';

import {Button, Typography} from '../../../main';
import {useDooboo} from '../../../main/providers';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function AlertDialogBasicStory(): JSX.Element {
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
        onPress={() =>
          alertDialog.open({
            title: 'Hello there!',
            body: 'This is an alert dialog.',
          })
        }
        style={{marginTop: 60, width: 200}}
        text="Dialog"
      />
      <Button
        color="primary"
        onPress={() =>
          alertDialog.open({
            title: 'Hello there!',
            body: 'This is an alert dialog.',
            actions: [
              <Button
                color="light"
                key="button-cancel"
                onPress={() => alertDialog.close()}
                text="Cancel"
              />,
              <Button
                key="button-ok"
                onPress={() => alertDialog.close()}
                text="OK"
              />,
            ],
          })
        }
        style={{marginTop: 20, width: 200}}
        text="With actions"
      />
    </Container>
  );
}

export default AlertDialogBasicStory;
