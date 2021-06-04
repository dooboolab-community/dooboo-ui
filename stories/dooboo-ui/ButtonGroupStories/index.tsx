import {ButtonGroup, ThemeProvider} from '../../../main';
import React, {ReactElement, useState} from 'react';
import {Text, View} from 'react-native';

import {ContainerDeco} from '../../../storybook/decorators';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

const ButtonGroupStory = (): React.ReactElement => {
  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const [option, setOption] = useState('Option 1');

  const selectOption = (index: number): void => {
    setOption(data[index]);

    switch (index) {
      case 0:
        setOption('Option 1');
        break;
      case 1:
        setOption('Option 2');
        break;
    }
  };

  return (
    <Container>
      <ButtonGroup
        style={{marginTop: 40, marginHorizontal: 20}}
        onPress={(index: number): void => selectOption(index)}
        data={data}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 32,
          }}>
          {option}
        </Text>
      </View>
    </Container>
  );
};

/**
 * Below are stories for web
 */
export default {
  title: 'ButtonGroup',
};

export const toStorybook = (): ReactElement => <ButtonGroupStory />;

toStorybook.story = {
  name: 'ButtonGroup - 4 buttons',
};

/**
 * Below are stories for app
 */
storiesOf('ButtonGroup', module)
  .addDecorator(ContainerDeco)
  .add('ButtonGroup - light', () => (
    <ThemeProvider initialThemeType="light">
      <ButtonGroupStory />
    </ThemeProvider>
  ))
  .add('ButtonGroup - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <ButtonGroupStory />
    </ThemeProvider>
  ));
