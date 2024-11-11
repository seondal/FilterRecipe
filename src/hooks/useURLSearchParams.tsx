"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type NewParamsType = { [key: string]: string };

const useURLSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const setNewParams = (newParams: NewParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      if (value) {
        const existingValues = newSearchParams.get(key);
        const updatedValues = existingValues
          ? `${existingValues},${value}`
          : value;
        newSearchParams.set(key, updatedValues);
      } else {
        newSearchParams.delete(key);
      }
    }
    return newSearchParams.toString();
  };

  const set = (newParams: NewParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      let newQuery = newSearchParams.get(key)?.split(",");
      if (newQuery) {
        newQuery.push(value);
        newSearchParams.set(key, newQuery.toString());
      } else {
        newSearchParams.set(key, value);
      }
    }
    return router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return { searchParams: Object.fromEntries(newSearchParams), set };
};

export default useURLSearchParams;
