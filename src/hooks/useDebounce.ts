import { useCallback } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return useCallback(
    (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  ) as T;
};