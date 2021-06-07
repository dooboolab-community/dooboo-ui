import * as React from 'react';

import {RenderAPI, act, fireEvent, render} from '@testing-library/react-native';
import {Text, View} from 'react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {RadioGroup} from '../RadioGroup';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

const data = ['Person', 'Animal', 'Bird', 'Other'];

describe('[RadioButton] render', () => {
  it('should render without crashing', () => {
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

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('label', () => {
    it('should render `labels`', () => {
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

      const json = testingLib.toJSON();

      expect(json).toMatchSnapshot();
    });

    it('should render `labels` with left position', () => {
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

      const json = testingLib.toJSON();

      expect(json).toMatchSnapshot();
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
});
