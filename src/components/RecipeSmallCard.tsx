"use client";

import { RecipeI } from "@/interface/recipe";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import RecipeDetailCard from "./RecipeDetailCard";

interface RecipeSmallCardI {
  data: RecipeI;
}

export default function RecipeSmallCard({ data }: RecipeSmallCardI) {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <RecipeDetailCard data={data} />
        </Modal>
      )}
      <article
        className="flex flex-col w-32 aspect-[3/5]"
        onClick={() => setIsModal(true)}>
        <div className="flex flex-grow">
          <div className="relative flex-1">
            <Image src={data.image.before} alt="" fill objectFit="cover" />
          </div>
          <div className="relative flex-1">
            <Image src={data.image.after} alt="" fill objectFit="cover" />
          </div>
        </div>
        <footer className="flex items-center h-12 text-xs">{data.title}</footer>
      </article>
    </>
  );
}
