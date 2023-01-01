import {Button, Snackbar} from '../..';
import React, {useCallback, useRef} from 'react';

import type {SnackbarRef} from '../..';
import type {SnackbarType} from '../../Styled/StyledComponents';
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
  background-color: ${({theme}) => theme.bg.default};
`;

function SnackbarDefault(): React.ReactElement {
  const snackbar = useRef<SnackbarRef>(null);

  const onPress = useCallback(
    (type?: SnackbarType): void => {
      if (snackbar) {
        snackbar.current?.show({
          content: {
            text: 'Lorem ipsum dolor sit amet',
          },
          type,
        });
      }
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
      <Snackbar ref={snackbar} />
      {types.map((type, i) => (
        <Button
          key={`${type}_${i}`}
          color={type === 'default' ? 'primary' : type}
          onPress={() => onPress(type)}
          text={`Open Snackbar - ${type}`}
          style={{margin: 20}}
        />
      ))}
    </Container>
  );
}

export default SnackbarDefault;
