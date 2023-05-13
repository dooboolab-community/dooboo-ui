import type {ComponentProps, ReactElement} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {ButtonGroup, DoobooProvider} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  viewMode: 'docs',
} as Meta;

type ButtonGroupProps = ComponentProps<typeof ButtonGroup<string>>;

const initialProps: ButtonGroupProps = {
  data: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
};

const Container = ({children}): ReactElement => {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <View
        style={css`
          flex-direction: row;
        `}
      >
        {children}
      </View>
    </DoobooProvider>
  );
};

const ButtonGroupStory: Story<ButtonGroupProps> = (args): ReactElement => {
  const {data, selectedIndex: initialSelectedIndex} = args;
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  return (
    <Container>
      <ButtonGroup
        style={{marginTop: 40, marginHorizontal: 20, marginBottom: 40}}
        onPress={(index: number): void => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
        {...args}
        data={data}
      />
    </Container>
  );
};

export const ButtonGroupTemplate = ButtonGroupStory.bind({});
ButtonGroupTemplate.args = initialProps;
