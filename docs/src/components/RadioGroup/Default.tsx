import {RadioGroup, ThemeProvider} from 'dooboo-ui';
import React, {ReactElement, useState} from 'react';

import {RadioButtonType} from 'dooboo-ui/RadioGroup/RadioButton';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
  padding: 15px 0;
  align-items: center;
`;

const data = ['Dog', 'Cat', 'Cow', 'Horse'];

type Props = {
  title?: string;
  type?: RadioButtonType;
};

const RadioGroupStory = ({title, type}: Props): React.ReactElement => {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

  return (
    <Container>
      <RadioGroup
        title={title}
        data={data}
        type={type || 'primary'}
        selectedValue={selectedValue}
        selectValue={(value) => setSelectedValue(value)}
      />
    </Container>
  );
};

export const Light = ({title, type}: Props): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <RadioGroupStory title={title} type={type} />
  </ThemeProvider>
);

export const Dark = ({title, type}: Props): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <RadioGroupStory title={title} type={type} />
  </ThemeProvider>
);
