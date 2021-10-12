import {Button, Snackbar, SnackbarRef} from '../../../main';
import React, {useCallback, useRef} from 'react';

import {SnackbarType} from '../../../main/Styled/StyledComponents';
import styled from '@emotion/native';

const types: SnackbarType[] = [
  'default',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
`;

function SnackbarDefault(): React.ReactElement {
  const snackbar = useRef<SnackbarRef>(null);

  const onPress = useCallback(
    (type?: SnackbarType): void => {
      if (snackbar)
        snackbar.current?.show({
          text: 'Lorem ipsum dolor sit amet',
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
      }}>
      <Snackbar ref={snackbar} />
      {types.map((type) => (
        <Button
          type={type === 'default' ? 'primary' : type}
          key={type}
          onPress={() => onPress(type)}
          text={`Open Snackbar - ${type}`}
          style={{margin: 20}}
        />
      ))}
    </Container>
  );
}

export default SnackbarDefault;
