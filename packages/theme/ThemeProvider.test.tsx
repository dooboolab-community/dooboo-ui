import {ThemeProvider, useTheme, withTheme} from './index';
import {act, renderHook} from '@testing-library/react-hooks';
import {colors, dark} from './colors';

import type {ReactElement} from 'react';
import {Context as ResponsiveContext} from 'react-responsive';
import {Text} from 'react-native';
import getGiven from 'givens';
import {render} from '@testing-library/react-native';
import {useTheme as useThemeEmotion} from '@emotion/react';

const given = getGiven();

const integerBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

describe('doobooContext', () => {
  context('when theme provider exists', () => {
    describe('themeType, theme, colors, changeThemeType', () => {
      const themeType = 'dark';
      const customDarkTheme = {primary: 'pink'};

      const wrapper = ({children}): ReactElement => (
        <ThemeProvider
          initialThemeType={themeType}
          customTheme={{dark: customDarkTheme}}
        >
          {children}
        </ThemeProvider>
      );

      it('returns current themeType', () => {
        const {result} = renderHook(() => useTheme(), {wrapper});

        expect(result.current.themeType).toEqual(themeType);
      });

      it('returns theme by given themeType', () => {
        const {result} = renderHook(() => useTheme(), {wrapper});

        expect(result.current.theme).toEqual({...dark, ...customDarkTheme});
      });

      it('returns colors', () => {
        const {result} = renderHook(() => useTheme(), {wrapper});

        expect(result.current.colors).toEqual(colors);
      });

      it('returns theme changer', () => {
        const {result} = renderHook(() => useTheme(), {wrapper});

        expect(result.current.themeType).toEqual('dark');

        act(() => {
          result.current.changeThemeType();
        });

        expect(result.current.themeType).toEqual('light');

        act(() => {
          result.current.changeThemeType('dark');
        });

        expect(result.current.themeType).toEqual('dark');
      });
    });

    describe('media', () => {
      const wrapper = ({children}): ReactElement => (
        <ResponsiveContext.Provider value={given.deviceInfo}>
          <ThemeProvider>{children}</ThemeProvider>
        </ResponsiveContext.Provider>
      );

      let media;

      beforeEach(() => {
        const {result} = renderHook(() => useTheme(), {wrapper});

        media = result.current.media;
      });

      context('on mobile', () => {
        given('deviceInfo', () => ({width: integerBetween(0, 767)}));

        it('confirms that device is mobile', () => {
          expect(media.isMobile).toEqual(true);
        });
      });

      context('on tablet', () => {
        given('deviceInfo', () => ({width: integerBetween(767, 992)}));

        it('confirms that device is tablet', () => {
          expect(media.isTablet).toEqual(true);
        });
      });

      context('on desktop', () => {
        const largeNumber = 2000;

        given('deviceInfo', () => ({width: integerBetween(992, largeNumber)}));

        it('confirms that device is desktop', () => {
          expect(media.isDesktop).toEqual(true);
        });
      });

      context('when device is in portrait mode', () => {
        given('deviceInfo', () => ({orientation: 'portrait'}));

        it('confirms that device is portrait', () => {
          expect(media.isPortrait).toEqual(true);
        });
      });

      context('when device is in landscape mode', () => {
        given('deviceInfo', () => ({orientation: 'landscape'}));

        it('confirms that device is landscape', () => {
          expect(media.isPortrait).toEqual(false);
        });
      });
    });
  });
});

describe('emotionContext', () => {
  context('when theme provider does not exists', () => {
    describe('useTheme', () => {
      it('returns empty object', () => {
        const {result} = renderHook(() => useThemeEmotion());

        expect(result.current).toEqual({});
      });
    });
  });

  describe('withTheme', () => {
    it('provides empty object to theme prop', () => {
      const TestComponent = withTheme(({theme}: {theme: object}) => (
        <Text>{JSON.stringify(theme)}</Text>
      ));

      const {getByText} = render(<TestComponent />);

      getByText('{}');
    });

    // This behavior is same inside styled component.
  });

  context('when theme provider exists', () => {
    // It has same theme and media value in DoobooContext, but not others.
  });
});
