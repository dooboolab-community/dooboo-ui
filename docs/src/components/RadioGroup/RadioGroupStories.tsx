import type {ComponentProps} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import {DoobooProvider, RadioGroup} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  viewMode: 'docs',
} as Meta;

type RadioGroupProps = ComponentProps<typeof RadioGroup>;

const initialProps: RadioGroupProps = {
  data: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedValue: 'Option 1',
};

function Container({children}): JSX.Element {
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
}

// eslint-disable-next-line react/function-component-definition
const RadioGroupStory: Story<RadioGroupProps> = (args): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState(
    // eslint-disable-next-line react/destructuring-assignment
    args.selectedValue as string,
  );

  return (
    <Container>
      <RadioGroup
        {...args}
        selectValue={(val) => setSelectedValue(val as string)}
        selectedValue={selectedValue}
      />
    </Container>
  );
};

export const RadioGroupTemplate = RadioGroupStory.bind({});
RadioGroupTemplate.args = initialProps;
