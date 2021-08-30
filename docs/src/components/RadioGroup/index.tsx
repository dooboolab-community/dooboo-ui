import {DefaultDark, DefaultLight} from './Default';
import {WithLabelsDark, WithLabelsLight} from './WithLabels';

import {View} from 'react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
`;

export const Default = (): React.ReactElement => (
  <Container>
    <View style={{flex: 1, marginRight: 15}}>
      <DefaultLight title={'primary'} type={'primary'} />
      <DefaultLight title={'secondary'} type={'secondary'} />
      <DefaultLight title={'success'} type={'success'} />
      <DefaultLight title={'info'} type={'info'} />
      <DefaultLight title={'warning'} type={'warning'} />
      <DefaultLight title={'danger'} type={'danger'} />
    </View>
    <View style={{flex: 1}}>
      <DefaultDark title={'primary'} type={'primary'} />
      <DefaultDark title={'secondary'} type={'secondary'} />
      <DefaultDark title={'success'} type={'success'} />
      <DefaultDark title={'info'} type={'info'} />
      <DefaultDark title={'warning'} type={'warning'} />
      <DefaultDark title={'danger'} type={'danger'} />
    </View>
  </Container>
);

export const WithLabels = (): React.ReactElement => (
  <Container>
    <View style={{flex: 1, marginRight: 15}}>
      <WithLabelsLight title={'primary'} type={'primary'} />
      <WithLabelsLight title={'secondary'} type={'secondary'} />
      <WithLabelsLight title={'success'} type={'success'} />
      <WithLabelsLight title={'info'} type={'info'} />
      <WithLabelsLight title={'warning'} type={'warning'} />
      <WithLabelsLight title={'danger'} type={'danger'} />
    </View>
    <View style={{flex: 1}}>
      <WithLabelsDark title={'primary'} type={'primary'} />
      <WithLabelsDark title={'secondary'} type={'secondary'} />
      <WithLabelsDark title={'success'} type={'success'} />
      <WithLabelsDark title={'info'} type={'info'} />
      <WithLabelsDark title={'warning'} type={'warning'} />
      <WithLabelsDark title={'danger'} type={'danger'} />
    </View>
  </Container>
);
