import {DoobooProvider, useDooboo} from '../../../providers';

import {Button} from '../../..';
import type {ReactElement} from 'react';
import type {SnackbarType} from '../../Styled/StyledComponents';
import styled from '@emotion/native';
import {useCallback} from 'react';

const types: SnackbarType[] = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};
`;

function SnackbarContent(): ReactElement {
  const {snackbar} = useDooboo();

  const onPress = useCallback(
    (type?: SnackbarType): void => {
      snackbar.show({
        content: {
          text: 'Lorem ipsum dolor sit amet',
        },
        type,
      });
    },
    [snackbar],
  );

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
      {types.map((type, i) => (
        <Button
          key={`${type}_${i}`}
          color={type}
          onPress={() => onPress(type)}
          text={`Open Snackbar - ${type}`}
          style={{margin: 20}}
        />
      ))}
    </Container>
  );
}

function SnackbarContainer(): ReactElement {
  return (
    <DoobooProvider>
      <SnackbarContent />
    </DoobooProvider>
  );
}

export default SnackbarContainer;
