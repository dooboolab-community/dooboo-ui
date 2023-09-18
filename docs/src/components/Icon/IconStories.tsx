import type {ComponentProps} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, Story} from '@storybook/react/types-6-0';
import type {IconNames} from 'dooboo-ui';
import {
  doobooIconList,
  DoobooProvider,
  EditText,
  Icon,
  Typography,
} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'Icon',
  component: Icon,
  viewMode: 'docs',
} as Meta;

type IconProps = ComponentProps<typeof Icon>;

const initialProps: IconProps = {
  name: 'Airplane',
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
const IconStory: Story<IconProps> = (args): JSX.Element => {
  return (
    <Container>
      <Icon {...args} />
    </Container>
  );
};

export const IconTemplate = IconStory.bind({});
IconTemplate.args = initialProps;

// IconList
export function IconList(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const filteredIcons = (doobooIconList as IconNames).filter((icon) =>
    icon.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <Container>
      <View
        style={css`
          flex: 1;
          flex-direction: column;
        `}
      >
        <EditText
          direction="row"
          onChangeText={(str) => setSearchText(str)}
          placeholder="Search icons"
          startElement={
            <Icon
              name="MagnifyingGlass"
              style={css`
                margin-right: 8px;
              `}
            />
          }
          style={css`
            margin-bottom: 20px;
          `}
          value={searchText}
        />
        <View
          style={css`
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          `}
        >
          {filteredIcons.map((icon): JSX.Element => {
            return (
              <View
                key={icon}
                style={css`
                  margin: 0 12px;
                  width: 120px;
                  justify-content: center;
                  align-items: center;
                  gap: 4px;
                `}
              >
                <Icon name={icon} size={18} />
                <Typography.Body4>{icon}</Typography.Body4>
              </View>
            );
          })}
        </View>
      </View>
    </Container>
  );
}
