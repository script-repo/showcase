import { useEffect, useState } from 'react';

const PREFIX = 'kcna-portal:';

/**
 * useState that mirrors its value into localStorage so progress survives reloads.
 */
export function usePersistedState<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const storageKey = PREFIX + key;
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw === null ? initial : (JSON.parse(raw) as T);
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
      // Ignore quota / private-mode errors — persistence is best-effort.
    }
  }, [storageKey, value]);

  return [value, setValue];
}
