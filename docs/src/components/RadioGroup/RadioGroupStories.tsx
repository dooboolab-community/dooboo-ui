import type {ComponentProps, ReactElement} from 'react';
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

const RadioGroupStory: Story<RadioGroupProps> = (args): ReactElement => {
  const [selectedValue, setSelectedValue] = useState(
    args.selectedValue as string,
  );

  return (
    <Container>
      <RadioGroup
        {...args}
        selectedValue={selectedValue}
        selectValue={(val) => setSelectedValue(val as string)}
      />
    </Container>
  );
};

export const RadioGroupTemplate = RadioGroupStory.bind({});
RadioGroupTemplate.args = initialProps;
