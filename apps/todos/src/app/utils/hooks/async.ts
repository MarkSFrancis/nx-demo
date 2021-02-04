import { useCallback, useEffect, useState } from 'react';
import { useMounted } from './mounted';

export interface FailedAsyncResult {
  error: unknown;
  state: 'error';
}

export interface SucceedAsyncResult<T> {
  value: T;
  state: 'success';
}

export interface LoadingAsyncResult {
  state: 'loading';
}

export interface DeferredAsyncResult {
  state: 'deferred';
}

export type AsyncResult<T> =
  | FailedAsyncResult
  | SucceedAsyncResult<T>
  | LoadingAsyncResult
  | DeferredAsyncResult;

export const useAsync = <T = void>(
  asyncFunc: () => Promise<T>,
  opts?: { deferred?: boolean }
): [() => void, AsyncResult<T>] => {
  const mounted = useMounted();
  const [result, setResult] = useState<AsyncResult<T>>({
    state: opts?.deferred ? 'deferred' : 'loading',
  });

  const invoke = useCallback(() => {
    if (result.state === 'loading') {
      return;
    }

    setResult((state) => ({
      ...state,
      state: 'loading',
    }));

    asyncFunc()
      .then((value) => {
        mounted.current &&
          setResult({
            state: 'success',
            value,
          });
      })
      .catch((error) => {
        mounted.current &&
          setResult({
            state: 'error',
            error,
          });
      });
  }, [result, setResult, mounted, asyncFunc]);

  useEffect(() => {
    if (!opts?.deferred) {
      invoke();
    }
  }, [opts, invoke]);

  return [invoke, result];
};
