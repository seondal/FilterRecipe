import { Suspense } from "react";
import SearchBar from "./SearchBar";
import { LayoutI } from "@/interface/page";

export default function Layout({ children }: LayoutI) {
  return (
    <>
      <Suspense>
        <SearchBar />
        {children}
      </Suspense>
    </>
  );
}
