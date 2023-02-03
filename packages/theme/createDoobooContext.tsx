import React from 'react';

type CreateCtx<A> = readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A | undefined>>,
];

// create context with no upfront defaultValue
// without having to do undefined check all the time
function createCtx<A>(): CreateCtx<A> {
  const ctx = React.createContext<A | undefined>(undefined);

  function useCtx(): A {
    const c = React.useContext(ctx);

    if (!c) {
      throw new Error('useTheme must be inside a ThemeProvider');
    }

    return c;
  }

  return [useCtx, ctx.Provider] as const;
}

export default createCtx;
