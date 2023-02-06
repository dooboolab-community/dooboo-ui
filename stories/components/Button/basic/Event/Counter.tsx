import {Description, Section} from '../../../../GlobalStyles';
import React, {useState} from 'react';

import {Button} from '../../../../../main';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {action} from '@storybook/addon-actions';

type Props = {themeType: ThemeType};

function Counter({themeType}: Props): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          style={{margin: 4}}
          onPress={(e): void => {
            setCount(count + 1);
            action('PLUS COUNT 1')(e);
          }}
          text="+"
        />
        <Button
          style={{margin: 4}}
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
}

export default Counter;
