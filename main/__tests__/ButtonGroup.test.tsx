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
          initialIndex={0}
          data={['option 1', 'option 2']}
          onPress={handlePress}
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

  it('selects option on press', () => {
    const {getByText} = renderButtonGroup();

    expect(getByText('option 1')).toHaveStyle({
      color: theme[themeType].textContrast,
    });

    fireEvent.press(getByText('option 2'));

    expect(getByText('option 1')).not.toHaveStyle({
      color: theme[themeType].textContrast,
    });
  });

  it('distinguishes between selected and unselected options.', () => {
    const {getByText} = renderButtonGroup();

    expect(getByText('option 1')).toHaveStyle({
      color: theme[themeType].textContrast,
    });

    expect(getByText('option 2')).toHaveStyle({
      color: theme[themeType].text,
    });
  });
});
