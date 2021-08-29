import React, {ReactElement, useState} from 'react';
import Modal from 'react-native-modalbox';
import {Button, Text} from 'react-native';

import AlertDialog from '../../../packages/AlertDialog/lib';
import {ContainerDeco} from '../../../storybook/decorators';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled.Text`
  font-size: 16px;
  margin-top: 24px;
`;

function Dialog(): React.ReactElement {
  const [dialogResult, setDialogResult] = useState<string | boolean | null>('');

  const alertRef: React.RefObject<Modal> = React.createRef();
  const confirmRef: React.RefObject<Modal> = React.createRef();
  const promptRef: React.RefObject<Modal> = React.createRef();

  const styles = {
    modalContainer: {width: '80%', height: 'auto'},
  };

  const renderAlert = (
    <>
      <Button
        title={'Alert'}
        onPress={() => {
          alertRef.current.open();
        }}
      />
      <AlertDialog
        ref={alertRef}
        styles={styles}
        onPress={(result) => {
          setDialogResult(result);
          alertRef.current.close();
        }}>
        <Text>{'Hello, this is an example of AlertDialog in dooboo-ui.'}</Text>
      </AlertDialog>
    </>
  );

  const renderConfirm = (
    <>
      <Button
        title={'Confirm'}
        onPress={() => {
          confirmRef.current.open();
        }}
      />
      <AlertDialog
        type={'confirm'}
        ref={confirmRef}
        styles={styles}
        onPress={(result) => {
          setDialogResult(result);
          confirmRef.current.close();
        }}>
        <Text>{'Hello, this is an example of AlertDialog in dooboo-ui.'}</Text>
      </AlertDialog>
    </>
  );

  const renderPrompt = (
    <>
      <Button
        title={'Prompt'}
        onPress={() => {
          promptRef.current.open();
        }}
      />
      <AlertDialog
        type={'prompt'}
        ref={promptRef}
        styles={styles}
        onPress={(result) => {
          setDialogResult(result);
          promptRef.current.close();
        }}>
        <Text>{'Hello, this is an example of AlertDialog in dooboo-ui.'}</Text>
      </AlertDialog>
    </>
  );

  return (
    <Container>
      {renderAlert}
      {renderConfirm}
      {renderPrompt}
      <ResultText>{`Dialog result : ${dialogResult}`}</ResultText>
    </Container>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'AlertDialog',
};

export const toStorybook = (): ReactElement => (
  <>
    <Dialog />
  </>
);

toStorybook.story = {
  name: 'dialog',
};

/**
 * Below are stories for app
 */

storiesOf('AlertDialog', module)
  .addDecorator(ContainerDeco)
  .add('dialog', () => (
    <>
      <Dialog />
    </>
  ));
