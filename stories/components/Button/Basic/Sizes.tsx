import {Button} from '../../../../main';
import type {ButtonSizeType} from '../../../../main';
import type {FC} from 'react';
import React from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const Sizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {sizes.map((size) => (
          <Button
            key={size}
            size={size}
            text={size.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
          />
        ))}

        {sizes.map((size) => (
          <Button
            key={size}
            type="outlined"
            size={size}
            text={size.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Sizes;
