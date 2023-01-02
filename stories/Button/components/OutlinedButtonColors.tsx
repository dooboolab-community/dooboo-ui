import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../main/Button';
import {Section} from '../../Styles';

const OutlinedButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Section>
          <Button
            type="outlined"
            color="brand"
            text="BRAND"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="primary"
            text="PRIMARY"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="secondary"
            text="SECONDARY"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="accept"
            text="ACCEPT"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="info"
            text="INFO"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="light"
            text="LIGHT"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="success"
            text="SUCCESS"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="warning"
            text="WARNING"
            style={{padding: 4}}
          />
          <Button
            type="outlined"
            color="danger"
            text="DANGER"
            style={{padding: 4}}
          />
        </Section>
      </Section>
    </ThemeProvider>
  );
};

export default OutlinedButtonColors;
