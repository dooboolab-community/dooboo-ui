import {renderHook} from '@testing-library/react-hooks';

import createDoobooContext from './createDoobooContext';

describe('createDoobooContext', () => {
  const [useCtx, Provider] = createDoobooContext();

  context('when theme provider exists', () => {
    it('returns context value provided by provider', () => {
      const wrapper = ({children}): JSX.Element => (
        <Provider value="context">{children}</Provider>
      );

      const {result} = renderHook(() => useCtx(), {wrapper});

      expect(result.current).toBe('context');
    });
  });
});
