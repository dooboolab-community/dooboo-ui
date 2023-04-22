import type {ReactElement} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Button} from 'dooboo-ui';

import {StoryProvider} from './index';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default function Link({link}): ReactElement {
  return (
    <StoryProvider>
      <View style={styles.container}>
        <Button
          color="info"
          text="Try this example on Snack"
          size="medium"
          onPress={() => Linking.openURL(link)}
        />
      </View>
    </StoryProvider>
  );
}
