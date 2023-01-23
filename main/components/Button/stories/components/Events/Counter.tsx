import {Description, Section} from '../../../../../GlobalStyles';
import React, {useState} from 'react';

import {Button} from '../../../index';
import type {FC} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {action} from '@storybook/addon-actions';

const Counter: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          style={{padding: 4}}
          onPress={(e): void => {
            setCount(count + 1);
            action('PLUS COUNT 1')(e);
          }}
          text="+"
        />
        <Button
          style={{padding: 4}}
          onPress={(e): void => {
            setCount(count - 1);
            action('MINUS COUNT 1')(e);
          }}
          text="-"
        />
        <Description>Count : {count}</Description>
      </Section>
    </ThemeProvider>
  );
};

export default Counter;
