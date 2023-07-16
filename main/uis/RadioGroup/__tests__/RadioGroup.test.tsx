import * as React from 'react';
import {View} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';

import {createComponent, createTestProps} from '../../../../test/testUtils';
import type {RadioButtonType} from '..';
import {RadioButton} from '../RadioButton';
import {RadioGroup} from '..';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

const data = ['Person', 'Animal', 'Bird', 'Other'];

describe('[RadioButton] render', () => {
  it('should render without crashing', async () => {
    props = createTestProps({
      selectedValue: data[0],
      selectValue: (value: string) => (props.selectedValue = value),
    });

    component = createComponent(
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <RadioGroup<string>
          title={'title'}
          data={data}
          selectedValue={props.selectedValue}
          selectValue={props.selectValue}
        />
      </View>,
    );

    testingLib = render(component);

    const baseElement = await waitFor(() => testingLib.toJSON());
    expect(baseElement).toBeTruthy();
  });

  describe('label', () => {
    it('should render `labels`', async () => {
      props = createTestProps();

      component = createComponent(
        <View>
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <RadioGroup<string>
              title={'title'}
              data={data}
              labels={data}
              selectedValue={data[0]}
            />
          </View>
        </View>,
      );

      testingLib = render(component);

      const baseElement = await waitFor(() => testingLib.toJSON());
      expect(baseElement).toBeTruthy();
    });

    it('should render `labels` with left position', async () => {
      props = createTestProps();

      component = createComponent(
        <View>
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <RadioGroup<string>
              title={'title'}
              data={data}
              labels={data}
              selectedValue={data[0]}
              labelPosition="left"
            />
          </View>
        </View>,
      );

      testingLib = render(component);

      const baseElement = await waitFor(() => testingLib.toJSON());
      expect(baseElement).toBeTruthy();
    });
  });

  it('should trigger `selectValue` and change `selectedValue` props', () => {
    props = createTestProps({
      selectedValue: data[0],
      selectValue: (value: string) => (props.selectedValue = value),
    });

    component = createComponent(
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <RadioGroup<string>
          title={'title'}
          data={data}
          selectedValue={props.selectedValue}
          selectValue={props.selectValue}
        />
      </View>,
    );

    testingLib = render(component);

    const secondOption = testingLib.getByTestId('radio-1');
    expect(props.selectedValue).toEqual(data[0]);

    fireEvent.press(secondOption);
    expect(props.selectedValue).toEqual(data[1]);
  });
});

describe('[RadioButton]', () => {
  it('should render and trigger `onLayout` and change `innerLayout`', () => {
    props = createTestProps({
      selectedValue: data[0],
      selectValue: (value: string) => (props.selectedValue = value),
    });

    component = createComponent(
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <RadioGroup<string>
          title={'title'}
          data={data}
          selectedValue={props.selectedValue}
          selectValue={props.selectValue}
        />
      </View>,
    );

    testingLib = render(component);

    const circleRadio = testingLib.getByTestId('circle-radio-0');

    act(() => {
      circleRadio.props.onLayout({
        nativeEvent: {
          layout: {
            width: 40,
            height: 40,
          },
        },
      });
    });

    expect(circleRadio.props.innerLayout).toEqual({
      width: 40,
      height: 40,
    });
  });

  describe('colors', () => {
    const types = [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
    ];

    it('should render all colors', async () => {
      component = createComponent(
        <View>
          {types.map((el) => {
            return (
              <View key={el} style={{flexDirection: 'row', marginTop: 24}}>
                <RadioGroup<string>
                  title={el}
                  data={data}
                  type={el as RadioButtonType}
                  selectedValue={data[0]}
                  labels={data}
                />
              </View>
            );
          })}
        </View>,
      );

      testingLib = render(component);

      const baseElement = await waitFor(() => testingLib.toJSON());
      expect(baseElement).toBeTruthy();
    });

    it('should render `disabled color', async () => {
      component = createComponent(
        <RadioButton disabled={true} label="label" />,
      );

      testingLib = render(component);

      const baseElement = await waitFor(() => testingLib.toJSON());
      expect(baseElement).toBeTruthy();
    });
  });
});
