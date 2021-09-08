import React from 'react';

type CreateCtx<A> = readonly [
  () => A | undefined,
  React.ProviderExoticComponent<React.ProviderProps<A | undefined>>,
];

// create context with no upfront defaultValue
// without having to do undefined check all the time
function createCtx<A>(): CreateCtx<A> {
  const ctx = React.createContext<A | undefined>(undefined);

  const useCtx = (): A | undefined => React.useContext(ctx);

  // make TypeScript infer a tuple, not an array of union types
  return [useCtx, ctx.Provider] as const;
}

export default createCtx;
