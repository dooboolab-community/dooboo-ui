import {useEffect, useState} from 'react';
import type {ColorSchemeName} from 'react-native';
import {useColorScheme} from 'react-native';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/* ?
 * Strangely enough, when useColorScheme() returns from the background state, it first returns a different color value and later returns the original color value.
 * Due to this phenomenon, there's a momentary flickering effect on the screen.
 * Therefore, to prevent this, we use useDebounce to delay the return of the color value until after a certain amount of time has passed.
 */
export function useDebouncedColorScheme(
  delay: number = 300,
): 'light' | 'dark' | null | undefined {
  const colorScheme = useColorScheme();

  return useDebounce<ColorSchemeName>(colorScheme, delay);
}
