import { Suspense } from "react";
import SearchBar from "./SearchBar";

export default function Layout({ children }: LayoutI) {
  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
