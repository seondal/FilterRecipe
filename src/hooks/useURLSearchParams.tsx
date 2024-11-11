"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ParamsType = { [key: string]: string };

const useURLSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const get = () => Object.fromEntries(newSearchParams);

  const has = (newParams: ParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      let newQuery = newSearchParams.get(key)?.split(",");
      return newQuery?.find((item) => item === value);
    }
  };

  const add = (newParams: ParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      let newQuery = newSearchParams.get(key)?.split(",");
      if (newQuery) {
        if (has(newParams)) return;
        newQuery.push(value);
        newSearchParams.set(key, newQuery.toString());
      } else {
        newSearchParams.set(key, value);
      }
    }
    return router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  const del = (newParams: ParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      let newQuery = newSearchParams.get(key)?.split(",");
      if (newQuery) {
        newQuery = newQuery.filter((item) => item != value);
        console.log("🚀 ~ del ~ newQuery:", newQuery);

        if (newQuery.length === 0) {
          newSearchParams.delete(key);
        } else newSearchParams.set(key, newQuery.toString());
      }
    }
    return router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return { get, add, del, has };
};

export default useURLSearchParams;
