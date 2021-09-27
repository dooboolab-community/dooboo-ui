import {ReactElement} from 'react';
import createDoobooContext from './createDoobooContext';
import {renderHook} from '@testing-library/react-hooks';

describe('createDoobooContext', () => {
  const [useCtx, Provider] = createDoobooContext('default');

  context('when theme provider does not exists', () => {
    it('returns default context value without provider', () => {
      const {result} = renderHook(() => useCtx());

      expect(result.current).toBe('default');
    });
  });

  context('when theme provider exists', () => {
    it('returns context value provided by provider', () => {
      const wrapper = ({children}): ReactElement => (
        <Provider value="context">{children}</Provider>
      );

      const {result} = renderHook(() => useCtx(), {wrapper});

      expect(result.current).toBe('context');
    });
  });
});
