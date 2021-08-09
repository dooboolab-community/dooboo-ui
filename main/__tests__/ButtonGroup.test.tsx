/* eslint-disable jest/no-identical-title */
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {ButtonGroup} from '../../main';
import {theme} from '../theme/colors';
import {ThemeProvider} from '../theme';

describe('[ButtonGroup]', () => {
  const themeType = 'light';

  const handlePress = jest.fn();

  const renderButtonGroup = (): RenderAPI =>
    render(
      <ThemeProvider initialThemeType={themeType}>
        <ButtonGroup
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

    const testingLib = render(createComponent(<ButtonGroup {...props} />));

    expect(testingLib.toJSON()).toMatchSnapshot();
  });

  it('listens to press event', () => {
    const {getByText} = renderButtonGroup();

    fireEvent.press(getByText('option 1'));

    expect(handlePress).toBeCalled();
  });

  context('when selectedIndex is not provided', () => {
    it('makes first option text notable', () => {
      const {getByText} = renderButtonGroup();

      expect(getByText('option 1')).toHaveStyle({
        color: theme[themeType].textContrast,
      });

      expect(getByText('option 2')).toHaveStyle({
        color: theme[themeType].text,
      });
    });
  });

  context('when selectedIndex is provided', () => {
    given('selectedIndex', () => 1);

    it('makes selected option text notable', () => {
      const {getByText} = renderButtonGroup();

      expect(getByText('option 1')).toHaveStyle({
        color: theme[themeType].text,
      });

      expect(getByText('option 2')).toHaveStyle({
        color: theme[themeType].textContrast,
      });
    });
  });

  describe('Border', () => {
    given('borderWidth', () => 1);
    given('borderRadius', () => 10);

    const fullWidthAndRadius = {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,

      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    };

    context('when data size is 1', () => {
      given('data', () => ['Option 1']);

      it('has width and radius in every direction', () => {
        const {getByTestId} = renderButtonGroup();

        expect(getByTestId('CHILD_0')).toHaveStyle(fullWidthAndRadius);
      });
    });

    context('when data size is 2', () => {
      given('data', () => ['Option 1', 'Option 2']);

      it('depends on position of element', () => {
        const {getByTestId} = renderButtonGroup();

        expect(getByTestId('CHILD_0')).toHaveStyle({
          ...fullWidthAndRadius,
          borderTopRightRadius: undefined,
          borderBottomRightRadius: undefined,
        });

        expect(getByTestId('CHILD_0')).not.toHaveStyle({
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        });

        expect(getByTestId('CHILD_1')).toHaveStyle({
          ...fullWidthAndRadius,
          borderLeftWidth: undefined,
          borderTopLeftRadius: undefined,
          borderBottomLeftRadius: undefined,
        });

        expect(getByTestId('CHILD_1')).not.toHaveStyle({
          borderLeftWidth: 1,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        });
      });
    });

    context('when data size is 3', () => {
      given('data', () => ['Option 1', 'Option 2', 'Option 3']);

      it('depends on position of element', () => {
        const {getByTestId} = renderButtonGroup();

        expect(getByTestId('CHILD_0')).toHaveStyle({
          ...fullWidthAndRadius,
          borderTopRightRadius: undefined,
          borderBottomRightRadius: undefined,
        });

        expect(getByTestId('CHILD_0')).not.toHaveStyle({
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        });

        expect(getByTestId('CHILD_1')).toHaveStyle({
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
        });

        expect(getByTestId('CHILD_1')).not.toHaveStyle({
          ...fullWidthAndRadius,
          borderRightWidth: undefined,
          borderTopWidth: undefined,
          borderBottomWidth: undefined,
        });

        expect(getByTestId('CHILD_2')).toHaveStyle({
          ...fullWidthAndRadius,
          borderTopLeftRadius: undefined,
          borderBottomLeftRadius: undefined,
        });

        expect(getByTestId('CHILD_2')).not.toHaveStyle({
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        });
      });
    });
  });
});
