"use client";

import { RecipeI } from "@/interface/recipe";
import Image from "next/image";
import { useState } from "react";
import RecipeDetailCard from "./RecipeDetailCard";

interface RecipeSmallCardI {
  data: RecipeI;
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
        className="flex flex-col w-[33%] cursor-pointer"
        onClick={() => setIsModal(true)}>
        <div className="flex flex-grow aspect-video">
          <div className="relative flex-1">
            <Image src={data.image.before} alt="" fill objectFit="cover" />
          </div>
          <div className="relative flex-1">
            <Image src={data.image.after} alt="" fill objectFit="cover" />
          </div>
        </div>
        <div className="p-2 h-16 overflow-hidden">{data.title}</div>
      </div>
    </>
  );
}
