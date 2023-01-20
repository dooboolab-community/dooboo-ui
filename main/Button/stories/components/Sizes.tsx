import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../index';
import {Section} from '../../../GlobalStyles';
import {ButtonSizeType} from '../../../Button';

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
            style={{padding: 4}}
          />
        ))}

        {sizes.map((size) => (
          <Button
            key={size}
            type="outlined"
            size={size}
            text={size.toUpperCase()}
            style={{padding: 4}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Sizes;
