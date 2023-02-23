import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Solid(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          paddingVertical: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          color="primary"
          text="Primary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="secondary"
          text="Secondary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="success"
          text="Success"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="danger"
          text="Danger"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="warning"
          text="Warning"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="info"
          text="Info"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="light"
          text="Light"
          style={{margin: 8}}
          onPress={() => {}}
        />
      </View>
    </StoryProvider>
  );
}
