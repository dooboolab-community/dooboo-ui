import type {RenderAPI} from '@testing-library/react-native';
import {render, fireEvent} from '@testing-library/react-native';

import type {ButtonGroupProps, ButtonGroupRenderItem} from '..';
import {ButtonGroup} from '..';
import type {ReactElement} from 'react';
import React from 'react';
import {createComponent} from '../../../../test/testUtils';
import type {StyleProp, ViewStyle} from 'react-native';
import {View, Text} from 'react-native';
import type {ReactTestInstance} from 'react-test-renderer';

type Item = {text: string};

function component(props: ButtonGroupProps<any>): ReactElement {
  return createComponent(<ButtonGroup {...props} />);
}

function getTestIdByIndex(index: number): string {
  return `TEST_ID_${index}`;
}

function filterReactTestInstance(
  nodes: (ReactTestInstance | string)[],
): ReactTestInstance[] {
  return nodes.filter(
    (node): node is ReactTestInstance => typeof node !== 'string',
  );
}

let testingLib: RenderAPI;

describe('[ButtonGroup]', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  it('should render without crashing', () => {
    testingLib = render(component({data: ['Item 1', 'Item 2']}));

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render without crashing with renderItem given', () => {
    testingLib = render(
      component({data: ['Item 1', 'Item 2'], renderItem: () => <View />}),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('[ButtonGroup] Interaction', () => {
    it('should simulate onPress with index and item', () => {
      let pressedIndex: number | undefined;
      let pressedItem: Item | undefined;

      const itemIndexToPress = 0;

      const data: Item[] = [{text: 'Item 1'}, {text: 'Item 2'}];

      testingLib = render(
        component({
          data,
          renderItem: ({item: {text}, index}) => (
            <View testID={getTestIdByIndex(index)}>
              <Text>{text}</Text>
            </View>
          ),
          onPress: (index: number, item: Item) => {
            pressedIndex = index;
            pressedItem = item;
          },
        }),
      );

      const button = testingLib.getByTestId(getTestIdByIndex(itemIndexToPress));

      fireEvent.press(button);

      expect(pressedIndex).toBe(itemIndexToPress);

      expect(pressedItem).toEqual(data[itemIndexToPress]);
    });

    it('should not simulate onPress when no onPress given. (ButtonGroup onPress should override touchableOpacityProps onPress)', () => {
      let pressed = false;

      const data: Item[] = [{text: 'Item 1'}, {text: 'Item 2'}];

      const testID = 'TEST_ID';

      testingLib = render(
        component({
          data,
          touchableOpacityProps: {
            onPress: () => {
              pressed = true;
            },
            onPressIn: () => {
              pressed = true;
            },
            onPressOut: () => {
              pressed = true;
            },
          },
          renderItem: ({index}) => <View testID={index ? undefined : testID} />,
        }),
      );

      const button = testingLib.getByTestId(testID);

      fireEvent.press(button);

      expect(pressed).toBe(false);
    });
  });

  describe('[ButtonGroup] data', () => {
    it('should render with given custom data and renderItem', () => {
      const data: Item[] = [{text: 'Item 1'}, {text: 'Item 2'}];

      testingLib = render(
        component({
          data,
          renderItem: ({item: {text}, index}) => (
            <View>
              <Text testID={getTestIdByIndex(index)}>{text}</Text>
            </View>
          ),
        }),
      );

      data.forEach((item, index) => {
        expect(
          testingLib.getByTestId(getTestIdByIndex(index)).children[0],
        ).toEqual(item.text);
      });
    });

    it('should render text with given string data', () => {
      const data: string[] = ['Item 1', 'Item 2'];

      testingLib = render(component({data}));

      data.forEach((item, index) => {
        expect(
          testingLib.getByTestId(`button-group-text-${index}`).children[0],
        ).toEqual(item);
      });
    });
  });

  describe('[ButtonGroup] selected', () => {
    it('should be selected only one item when selectedIndex given', () => {
      const testID = 'TEST_SINGLE_SELECT';

      const data: Item[] = [
        {text: 'Item 1'},
        {text: 'Item 2'},
        {text: 'Item 3'},
      ];

      const Component = (_: {selected: boolean}): ReactElement => <View />;

      const renderItem: ButtonGroupRenderItem<Item> = (props) => {
        return (
          <View testID={testID}>
            <Component {...props} />
          </View>
        );
      };

      testingLib = render(
        component({
          selectedIndex: 0,
          data,
          renderItem,
        }),
      );

      const items = filterReactTestInstance(
        testingLib.getAllByTestId(testID).map((v) => v.children[0]),
      );

      const selectedItemCount = items.reduce(
        (acc, currNode) => (acc + currNode.props.selected ? 1 : 0),
        0,
      );

      expect(selectedItemCount).toBe(1);
    });

    it('should item has given styles', () => {
      const selectedIndex = 0;

      const data: string[] = ['Item1', 'Item2', 'Item3'];

      const styles = {
        selectedButton: {
          backgroundColor: 'red',
        },
        selectedText: {
          color: 'white',
        },
        unselectedButton: {
          backgroundColor: 'pink',
        },
        unselectedText: {
          color: 'black',
        },
      };

      testingLib = render(
        component({
          selectedIndex,
          data,
          styles,
        }),
      );

      data.forEach((item, index) => {
        const selected = index === selectedIndex;

        const button = testingLib.getByTestId(`button-group-item-${index}`);

        const text = testingLib.getByTestId(`button-group-text-${index}`);

        expect(button).toHaveStyle(
          selected ? styles.selectedButton : styles.unselectedButton,
        );

        expect(text).toHaveStyle(
          selected ? styles.selectedText : styles.unselectedText,
        );
      });
    });
  });

  describe('[ButtonGroup] direction', () => {
    it(`should render vertically with [direction='column']`, () => {
      const testID = 'TEST_ID';

      const renderItem: ButtonGroupRenderItem<string> = () => {
        return <View />;
      };

      testingLib = render(
        component({
          testID,
          data: ['Item 1', 'Item 2'],
          renderItem,
          direction: 'column',
        }),
      );

      expect(testingLib.getByTestId(testID).props.style).toMatchObject({
        flexDirection: 'column',
      });
    });

    it(`should render horizontally with [direction='row']`, () => {
      const testID = 'TEST_ID';

      const renderItem: ButtonGroupRenderItem<string> = () => {
        return <View />;
      };

      testingLib = render(
        component({
          testID,
          data: ['Item 1', 'Item 2'],
          renderItem,
          direction: 'row',
        }),
      );

      expect(testingLib.getByTestId(testID).props.style).toMatchObject({
        flexDirection: 'row',
      });
    });

    describe('[ButtonGroup] borderStyle', () => {
      it('should render with borderStyle', () => {
        const testID = 'TEST_ID';

        const borderStyle: ButtonGroupProps<string>['borderStyle'] = {
          width: 1,
          radius: 0,
          color: 'red',
        };

        const renderItem: ButtonGroupRenderItem<string> = () => {
          return <View />;
        };

        testingLib = render(
          component({
            testID,
            data: ['Item 1', 'Item 2'],
            renderItem,
            borderStyle,
          }),
        );

        const buttonGroup = testingLib.getByTestId(testID);

        expect(buttonGroup.props.style.borderWidth).toEqual(borderStyle.width);

        expect(buttonGroup.props.style.borderColor).toEqual(borderStyle.color);

        expect(buttonGroup.props.style.borderRadius).toEqual(
          borderStyle.radius,
        );
      });
    });

    describe('[ButtonGroup] styles', () => {
      it('should render with given style', () => {
        const testID = 'BUTTON_GROUP_CONTAINER';

        const data: Item[] = [{text: 'Item 1'}, {text: 'Item 2'}];

        const customContainerStyle: StyleProp<ViewStyle> = {
          flex: 1,
          height: 50,
        };

        testingLib = render(
          component({
            data,
            renderItem: () => <View />,
            testID,
            style: customContainerStyle,
          }),
        );

        expect(testingLib.getByTestId(testID).props.style).toMatchObject(
          customContainerStyle,
        );
      });
    });
  });
});
