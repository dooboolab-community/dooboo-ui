import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../index';
import {Section} from '../../../GlobalStyles';
import {css} from '@emotion/native';

const Custom: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <>
        <Section>
          <Button
            type="solid"
            text="ENABLED"
            style={{padding: 4}}
            styles={{
              container: css`
                background-color: #449944;
                padding: 12px 12px;
              `,
              text: {color: '#fff'},
              disabled: {backgroundColor: '#efefef'},
              disabledText: {color: '#ccc'},
            }}
          />

          <Button
            type="solid"
            text="DISABLED"
            disabled
            style={{padding: 4}}
            styles={{
              container: css`
                background-color: #449944;
                padding: 12px 12px;
              `,
              text: {color: '#fff'},
              disabled: {backgroundColor: '#efefef'},
              disabledText: {color: '#ccc'},
            }}
          />
        </Section>
      </>
    </ThemeProvider>
  );
};

export default Custom;
