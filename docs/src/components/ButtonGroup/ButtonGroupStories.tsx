import type {ComponentProps} from 'react';
import {useState} from 'react';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {ButtonGroup, DoobooProvider} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  viewMode: 'docs',
} as Meta;

type ButtonGroupProps = ComponentProps<typeof ButtonGroup>;

const initialProps: ButtonGroupProps = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  initialValue: 'Option 1',
  color: 'primary',
};

function Container({children}): JSX.Element {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      {children}
    </DoobooProvider>
  );
}

// eslint-disable-next-line react/function-component-definition
const ButtonGroupStory: Story<ButtonGroupProps> = (args): JSX.Element => {
  const {options, initialValue} = args;
  const [selectedIndex, setSelectedIndex] = useState(initialValue);

  return (
    <Container>
      <ButtonGroup
        initialValue={selectedIndex}
        onValueChange={setSelectedIndex}
        {...args}
        options={options}
      />
    </Container>
  );
};

export const ButtonGroupTemplate = ButtonGroupStory.bind({});
ButtonGroupTemplate.args = initialProps;
