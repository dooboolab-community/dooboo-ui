import type {ReactElement} from 'react';
import createDoobooContext from './createDoobooContext';
import {renderHook} from '@testing-library/react-hooks';

describe('createDoobooContext', () => {
  const [useCtx, Provider] = createDoobooContext();

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
