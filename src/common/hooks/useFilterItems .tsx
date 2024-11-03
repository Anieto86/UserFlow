import { useState, useCallback, useMemo } from "react";

export const useFilterItems = <T,>(
  items: T[],
  keys: (keyof T)[]
): [T[], string, (value: string) => void] => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const filteredItems = useMemo(() => {
    const lowercasedVal = searchValue.toLowerCase();
    return items.filter(item =>
      keys.some(key => item[key]?.toString().toLowerCase().includes(lowercasedVal))
    );
  }, [searchValue, items, keys]);

  return [filteredItems, searchValue, handleSearchChange];
};
