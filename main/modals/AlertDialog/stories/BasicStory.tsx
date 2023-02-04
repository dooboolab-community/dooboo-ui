import {DoobooProvider, useDooboo} from '../../../providers';

import {Button} from '../../..';
import type {ReactElement} from 'react';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function AlertDialogStory(): ReactElement {
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
      <Button
        color="primary"
        text="Open"
        style={{margin: 20}}
        onPress={() =>
          alertDialog.open({
            title: 'Hello there!',
          })
        }
      />
      <Button
        color="danger"
        text="Close"
        style={{margin: 20}}
        onPress={() => alertDialog.close()}
      />
    </Container>
  );
}

function AlertDialogBasic(): ReactElement {
  return (
    <DoobooProvider>
      <AlertDialogStory />
    </DoobooProvider>
  );
}

export default AlertDialogBasic;
