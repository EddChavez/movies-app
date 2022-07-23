import { useEffect } from 'react';
import { useState } from 'react';

export const useDebouncedSetValue = (input: string = '') => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
