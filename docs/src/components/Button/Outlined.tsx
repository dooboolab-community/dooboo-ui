import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Outlined(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          marginVertical: 8,

          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          type="outlined"
          color="primary"
          text="Primary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          type="outlined"
          color="secondary"
          text="Secondary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="success"
          text="Success"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="danger"
          text="Danger"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="warning"
          text="Warning"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="info"
          text="Info"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="light"
          text="Light"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
      </View>
    </StoryProvider>
  );
}
