import {Button} from '../../index';
import type {ButtonSizeType} from '../../../Button';
import type {FC} from 'react';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
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
