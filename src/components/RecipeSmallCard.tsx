"use client";

import Image from "next/image";
import { useState } from "react";
import RecipeDetailCard from "./RecipeDetailCard";
import { RecipeCardDataI } from "@/interface/component";

interface RecipeSmallCardI {
  data: RecipeCardDataI;
}

export default function RecipeSmallCard({ data }: RecipeSmallCardI) {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && (
        <RecipeDetailCard
          data={data}
          open={isModal}
          onClose={() => setIsModal(false)}
        />
      )}
      <div
        className="flex flex-col w-[32%] cursor-pointer rounded-md bg-card shadow-md hover:shadow-inner"
        onClick={() => setIsModal(true)}>
        <div className="flex flex-grow aspect-video">
          <div className="relative flex-1 ">
            <Image
              src={data.image.before}
              alt=""
              fill
              className="object-cover rounded-l-md"
              sizes="100%"
            />
          </div>
          <div className="relative flex-1 rounded-md">
            <Image
              src={data.image.after}
              alt=""
              fill
              className="object-cover rounded-r-md"
              sizes="100%"
            />
          </div>
        </div>
        <div className="p-2 h-16 overflow-hidden">{data.title}</div>
      </div>
    </>
  );
}
