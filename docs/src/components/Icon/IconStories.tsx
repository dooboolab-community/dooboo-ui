import type {ComponentProps, ReactElement} from 'react';
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
import {useFonts} from 'expo-font';
import {useDarkMode} from 'storybook-dark-mode';

export default {
  title: 'Icon',
  component: Icon,
  viewMode: 'docs',
} as Meta;

type IconProps = ComponentProps<typeof Icon>;

const initialProps: IconProps = {
  name: 'HomeAlt',
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

const IconStory: Story<IconProps> = (args): ReactElement => {
  return (
    <Container>
      <Icon {...args} />
    </Container>
  );
};

export const IconTemplate = IconStory.bind({});
IconTemplate.args = initialProps;

// IconList
export function IconList(): ReactElement {
  const [searchText, setSearchText] = useState('');
  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Container>
        <View />
      </Container>
    );
  }

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
          style={{marginBottom: 20}}
          startElement={<Icon name="SearchAlt" />}
          value={searchText}
          placeholder="Search icons"
          onChangeText={(str) => setSearchText(str)}
        />
        <View
          style={css`
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          `}
        >
          {filteredIcons.map((icon): ReactElement => {
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
