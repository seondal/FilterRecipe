import { Suspense } from "react";
import Feed from "./Feed";
import SearchBar from "./SearchBar";

export default function MainPage() {
  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      <Feed />
    </>
  );
}
