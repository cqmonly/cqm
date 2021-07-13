import { useEffect, useState } from "react";
// import { IParam } from "../common/type";
const isFalse = (value: unknown) => {
  return value === 0 ? true : !!value;
};

export const cleanObject = (object: object) => {
  const results: any = { ...object };
  Object.keys(object).forEach((key: string) => {
    // ts-ignore
    const value = results[key];
    if (!isFalse(value)) {
      // ts-ignore
      delete results[key];
    }
  });
  return results;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
