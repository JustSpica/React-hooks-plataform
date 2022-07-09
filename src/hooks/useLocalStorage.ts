import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  value: T,
): [T, (value: T) => void] {
  const storaged = JSON.parse(localStorage.getItem(key) as string) ?? value;

  const [state, setState] = useState<T>(storaged);

  function fn(newValue: T) {
    localStorage.setItem(key, JSON.stringify({ newValue }));
    setState(newValue);
  }

  return [state, fn];
}
