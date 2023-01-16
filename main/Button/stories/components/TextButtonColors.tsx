import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../index';
import {Section} from '../../../GlobalStyles';

const TextButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          type="text"
          color="primary"
          text="PRIMARY"
          style={{padding: 4}}
        />
        <Button
          type="text"
          color="secondary"
          text="SECONDARY"
          style={{padding: 4}}
        />
        <Button
          type="text"
          color="success"
          text="SUCCESS"
          style={{padding: 4}}
        />
        <Button
          type="text"
          color="warning"
          text="WARNING"
          style={{padding: 4}}
        />
        <Button type="text" color="danger" text="DANGER" style={{padding: 4}} />
        <Button type="text" color="info" text="INFO" style={{padding: 4}} />
        <Button type="text" color="light" text="LIGHT" style={{padding: 4}} />
      </Section>
    </ThemeProvider>
  );
};

export default TextButtonColors;
