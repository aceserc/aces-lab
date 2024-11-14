/**
 * Taken from @jrtilak/lazykit
 * See more about this method: https://lazykit.jrtilak.dev/docs/react-hooks/functional/useDebounceCallback
 */

import { useCallback } from "react";

import debounce from "@/helpers/debounce";

function useDebounceCallback<A extends unknown[]>(
  fn: (...args: A) => void,
  delay: number = 300,
) {
  const debouncedFn = useCallback(debounce(fn, delay), []);
  return debouncedFn;
}

export default useDebounceCallback;
