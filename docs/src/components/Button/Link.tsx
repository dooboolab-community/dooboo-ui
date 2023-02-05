import {Button, DoobooProvider} from 'dooboo-ui';
import {Linking, StyleSheet, View} from 'react-native';

import type {ReactElement} from 'react';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

type LinkProps = {
  link: string;
};

export function Link({link}: LinkProps): ReactElement {
  return (
    <DoobooProvider>
      <View style={styles.container}>
        <Button
          color="info"
          text="Try this example on Snack"
          size="medium"
          onPress={() => Linking.openURL(link)}
        />
      </View>
    </DoobooProvider>
  );
}
