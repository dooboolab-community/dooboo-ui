import React, {FC} from 'react';
import {View} from 'react-native';
import {Basic} from './Basic';
import {WithTitle} from './WithTitle';
import {WithLabels} from './WithLabels';
import {Colored} from './Colored';
import {SelectValue} from './SelectValue';

export const BasicDemo: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <Basic theme="light" />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Basic theme="dark" />
      </View>
    </View>
  );
};

export const WithTitleDemo: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <WithTitle theme="light" />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <WithTitle theme="dark" />
      </View>
    </View>
  );
};

export const WithLabelsDemo: FC<{labelPosition: 'left' | 'right'}> = ({
  labelPosition,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <WithLabels theme="light" labelPosition={labelPosition} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <WithLabels theme="dark" labelPosition={labelPosition} />
      </View>
    </View>
  );
};

export const ColoredDemo: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <Colored theme="light" />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Colored theme="dark" />
      </View>
    </View>
  );
};

export const SelectValueDemo: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <SelectValue theme="light" />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <SelectValue theme="dark" />
      </View>
    </View>
  );
};
