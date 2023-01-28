import {ThemeProvider, dark, light} from '@dooboo-ui/theme';
import {createComponent, createTestProps} from '../../test/testUtils';
import {fireEvent, render} from '@testing-library/react-native';

import {ButtonGroupLegacy} from '..';

import React from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import getGiven from 'givens';

const given = getGiven();
const theme = {light, dark};

describe('[ButtonGroupLegacy]', () => {
  const themeType = 'light';

  const handlePress = jest.fn();

  const renderButtonGroup = (): RenderAPI =>
    render(
      <ThemeProvider initialThemeType={themeType}>
        <ButtonGroupLegacy
          data={given.data ?? ['option 1', 'option 2']}
          selectedIndex={given.selectedIndex}
          onPress={handlePress}
          borderWidth={given.borderWidth}
          borderRadius={given.borderRadius}
          style={given.style}
          styles={given.styles}
        />
      </ThemeProvider>,
    );

  beforeEach(() => {
    handlePress.mockClear();
  });

  it('renders without crashing', () => {
    const props = createTestProps();

    const testingLib = render(
      createComponent(<ButtonGroupLegacy {...props} />),
    );

    expect(testingLib.toJSON()).toBeTruthy();
  });

  it('listens to press event', () => {
    const {getByText} = renderButtonGroup();

    fireEvent.press(getByText('option 1'));

    expect(handlePress).toBeCalled();
  });

  context('when selectedIndex is not provided', () => {
    it('makes first option text notable', () => {
      const {getByText} = renderButtonGroup();

      expect(getByText('option 1').props.style[1]).toEqual({
        color: theme[themeType].text.contrast,
      });

      expect(getByText('option 2').props.style[1]).toEqual({
        color: theme[themeType].text.basic,
      });
    });
  });

  context('when selectedIndex is provided', () => {
    given('selectedIndex', () => 1);

    it('makes selected option text notable', () => {
      const {getByText} = renderButtonGroup();

      expect(getByText('option 1').props.style[1]).toEqual({
        color: theme[themeType].text.basic,
      });

      expect(getByText('option 2').props.style[1]).toEqual({
        color: theme[themeType].text.contrast,
      });
    });
  });

  // describe('Border', () => {
  //   given('borderWidth', () => 1);
  //   given('borderRadius', () => 10);

  //   const fullWidthAndRadius = {
  //     borderLeftWidth: 1,
  //     borderRightWidth: 1,
  //     borderTopWidth: 1,
  //     borderBottomWidth: 1,

  //     borderTopLeftRadius: 10,
  //     borderTopRightRadius: 10,
  //     borderBottomLeftRadius: 10,
  //     borderBottomRightRadius: 10,
  //   };

  //   context('when data size is 1', () => {
  //     given('data', () => ['Option 1']);

  //     it('has width and radius in every direction', () => {
  //       const {getByTestId} = renderButtonGroup();

  //       expect(getByTestId('CHILD_0').props.style).toEqual(fullWidthAndRadius);
  //     });
  //   });

  // context('when data size is 2', () => {
  //   given('data', () => ['Option 1', 'Option 2']);

  //   it('depends on position of element', () => {
  //     const {getByTestId} = renderButtonGroup();

  //     expect(getByTestId('CHILD_0')).toEqual({
  //       ...fullWidthAndRadius,
  //       borderTopRightRadius: undefined,
  //       borderBottomRightRadius: undefined,
  //     });

  //     expect(getByTestId('CHILD_0')).not.toEqual({
  //       borderTopRightRadius: 10,
  //       borderBottomRightRadius: 10,
  //     });

  //     expect(getByTestId('CHILD_1')).toEqual({
  //       ...fullWidthAndRadius,
  //       borderLeftWidth: undefined,
  //       borderTopLeftRadius: undefined,
  //       borderBottomLeftRadius: undefined,
  //     });

  //     expect(getByTestId('CHILD_1')).not.toEqual({
  //       borderLeftWidth: 1,
  //       borderTopLeftRadius: 10,
  //       borderBottomLeftRadius: 10,
  //     });
  //   });
  // });

  //   context('when data size is 3', () => {
  //     given('data', () => ['Option 1', 'Option 2', 'Option 3']);

  //     /* eslint-disable jest/no-identical-title */
  //     it('depends on position of element', () => {
  //       const {getByTestId} = renderButtonGroup();

  //       expect(getByTestId('CHILD_0')).toEqual({
  //         ...fullWidthAndRadius,
  //         borderTopRightRadius: undefined,
  //         borderBottomRightRadius: undefined,
  //       });

  //       expect(getByTestId('CHILD_0')).not.toEqual({
  //         borderTopRightRadius: 10,
  //         borderBottomRightRadius: 10,
  //       });

  //       expect(getByTestId('CHILD_1')).toEqual({
  //         borderRightWidth: 1,
  //         borderTopWidth: 1,
  //         borderBottomWidth: 1,
  //       });

  //       expect(getByTestId('CHILD_1')).not.toEqual({
  //         ...fullWidthAndRadius,
  //         borderRightWidth: undefined,
  //         borderTopWidth: undefined,
  //         borderBottomWidth: undefined,
  //       });

  //       expect(getByTestId('CHILD_2')).toEqual({
  //         ...fullWidthAndRadius,
  //         borderLeftWidth: undefined,
  //         borderTopLeftRadius: undefined,
  //         borderBottomLeftRadius: undefined,
  //       });

  //       expect(getByTestId('CHILD_2')).not.toEqual({
  //         borderTopLeftRadius: 10,
  //         borderBottomLeftRadius: 10,
  //       });
  //     });
  //   });
  // });
});