import {Button, Snackbar} from '../../..';
import React, {useCallback, useRef} from 'react';

import type {SnackbarRef} from '../../..';
import type {SnackbarType} from '../../Styled/StyledComponents';
import {Typography} from '../../Typography';
import styled from '@emotion/native';

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

function SnackbarDefault(): React.ReactElement {
  const snackbar = useRef<SnackbarRef>(null);

  const onPress = useCallback(
    (type?: SnackbarType): void => {
      if (snackbar) {
        snackbar.current?.show({
          content: {
            element: (
              <Typography.Body1>
                <Typography.Body1
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  Lorem ipsum
                </Typography.Body1>
                &nbsp;dolor sit amet
              </Typography.Body1>
            ),
          },
          type,
          actionText: 'Cancel',
          onActionPress: () =>
            snackbar.current?.show({
              content: {text: 'Cancel pressed!!!'},
              type,
            }),
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
          key={i}
          color={type}
          onPress={() => onPress(type)}
          text={`Open Snackbar - ${type}`}
          style={{margin: 20}}
        />
      ))}
    </Container>
  );
}

export default SnackbarDefault;
