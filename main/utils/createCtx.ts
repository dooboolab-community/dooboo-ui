import type {ProviderExoticComponent, ProviderProps} from 'react';
import {createContext, useContext} from 'react';

type CreateCtx<A> = readonly [
  () => A,
  ProviderExoticComponent<ProviderProps<A | undefined>>,
];

// create context with no upfront defaultValue
// without having to do undefined check all the time
function createCtx<A>(errMessage?: string): CreateCtx<A> {
  const ctx = createContext<A | undefined>(undefined);

  function useCtx(): A {
    const c = useContext(ctx);

    if (!c) {
      throw new Error(
        errMessage || 'useCtx must be inside a Provider with a value',
      );
    }

    return c;
  }

  // make TypeScript infer a tuple, not an array of union types
  return [useCtx, ctx.Provider] as const;
}

export default createCtx;
