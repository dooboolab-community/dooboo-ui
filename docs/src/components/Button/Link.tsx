import {Linking, StyleSheet, View} from 'react-native';

import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

type LinkProps = {
  link: string;
};

export const Link: FC<LinkProps> = ({link}) => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button
          type="info"
          text="Try this example on Snack"
          size="medium"
          style={{paddingTop: 15}}
          onPress={() => Linking.openURL(link)}
        />
      </View>
    </ThemeProvider>
  );
};
