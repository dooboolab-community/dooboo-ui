import React from 'react';

type CreateCtx<A> = readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A>>,
];

// create context with no upfront defaultValue
// without having to do undefined check all the time
function createCtx<A>(defaultContext: A): CreateCtx<A> {
  const ctx = React.createContext<A>(defaultContext);

  const useCtx = (): A => React.useContext(ctx);

  // make TypeScript infer a tuple, not an array of union types
  return [useCtx, ctx.Provider] as const;
}

export default createCtx;
