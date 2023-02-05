import {Basic} from './Basic';
import {Colored} from './Colored';
import React from 'react';
import type {ReactElement} from 'react';
import {SelectValue} from './SelectValue';
import {View} from 'react-native';
import {WithLabels} from './WithLabels';
import {WithTitle} from './WithTitle';

export function BasicDemo(): ReactElement {
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
}

export function WithTitleDemo(): ReactElement {
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
}

export function WithLabelsDemo({
  labelPosition,
}: {
  labelPosition: 'left' | 'right';
}): ReactElement {
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
}

export function ColoredDemo(): ReactElement {
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
}

export function SelectValueDemo(): ReactElement {
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
      <View style={{flex: 1}}>
        <SelectValue theme="dark" />
      </View>
    </View>
  );
}
