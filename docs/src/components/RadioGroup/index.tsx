import {Dark, Light} from './Default';

import {View} from 'react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
`;

export const Default = (): React.ReactElement => (
  <Container>
    <View style={{flex: 1, marginRight: 15}}>
      <Light title={'primary'} type={'primary'} />
      <Light title={'secondary'} type={'secondary'} />
      <Light title={'success'} type={'success'} />
      <Light title={'info'} type={'info'} />
      <Light title={'warning'} type={'warning'} />
      <Light title={'danger'} type={'danger'} />
    </View>
    <View style={{flex: 1}}>
      <Dark title={'primary'} type={'primary'} />
      <Dark title={'secondary'} type={'secondary'} />
      <Dark title={'success'} type={'success'} />
      <Dark title={'info'} type={'info'} />
      <Dark title={'warning'} type={'warning'} />
      <Dark title={'danger'} type={'danger'} />
    </View>
  </Container>
);
