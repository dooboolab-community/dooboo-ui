import type {FC} from 'react';
import {Icon} from '../../../main/Icon';
import {IconButton} from '../../../main';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.background};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 16px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
  color: ${({theme}) => theme.textContrast};
`;

const IconStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ScrollContainer
      contentContainerStyle={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <Container style={{paddingVertical: 60}}>
        <View
          style={{
            width: '100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
          <View style={{width: 8}} />
          <IconButton icon={<StyledIcon size={24} name="add-light" />} />
          <View style={{width: 8}} />
          <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
        </View>
        <View
          style={{
            marginTop: 40,
            width: '100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton icon={<StyledIcon size={16} name="cross-light" />} />
          <View style={{width: 8}} />
          <IconButton icon={<StyledIcon size={16} name="tile-light" />} />
        </View>
      </Container>
    </ScrollContainer>
  );
};

export default IconStory;
