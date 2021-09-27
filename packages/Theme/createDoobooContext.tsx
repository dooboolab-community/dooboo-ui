import React from 'react';

type CreateCtx<A> = readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A>>,
];

export default function createDoobooContext<A>(
  defaultContext: A,
): CreateCtx<A> {
  const ctx = React.createContext<A>(defaultContext);

  const useCtx = (): A => React.useContext(ctx);

  return [useCtx, ctx.Provider] as const;
}
