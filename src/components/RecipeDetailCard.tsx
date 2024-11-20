"use client";

import { SITE } from "@/constants/env";
import { ModalI, RecipeCardDataI } from "@/interface/component";
import {
  ArrowPathIcon,
  EyeIcon,
  EyeSlashIcon,
  ShareIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import { BookmarkSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RecipeDetailCardI extends ModalI {
  data: RecipeCardDataI;
}

function getShortString(longString: string, maxLength: number) {
  return longString.length > maxLength
    ? longString.slice(0, maxLength) + "..."
    : longString;
}

export default function RecipeDetailCard({
  data,
  open,
  onClose,
}: RecipeDetailCardI) {
  const router = useRouter();

  const [showBefore, setShowBefore] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  function handleShare() {
    navigator.clipboard.writeText(`${SITE}/recipe/${data.id}`);
    alert("레시피를 공유할 수 있는 링크가 클립보드에 복사되었어요!");
  }

  function handleClose() {
    if (onClose === undefined) {
      return router.push("/");
    }
    return onClose();
  }

  function handleBookmark() {
    alert("해당 기능은 아직 준비중이에요. 업데이트를 기다려주세요");
  }

  function handleClickUserid() {
    router.push(`/?userid=${data.userId}`);
    handleClose();
  }

  return (
    <dialog open={open}>
      <article className="">
        <header>
          <button aria-label="Close" rel="prev" onClick={handleClose}></button>
          <h4>{data.title}</h4>
        </header>
        <div className="relative aspect-square">
          {showRecipe && (
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex items-center justify-center gap-2 p-4 flex-wrap text-white">
              {data.recipe.map((item, idx) => (
                <kbd key={idx}>
                  {item.property} : {item.value}
                </kbd>
              ))}
            </div>
          )}
          {showBefore ? (
            <Image
              src={data.image.before}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Image
              src={data.image.after}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <hr />
        <a onClick={handleClickUserid} className="cursor-pointer">
          @{getShortString(data.userId, 12)}
        </a>{" "}
        &nbsp;
        <b>
          #{data.category.main} #{data.category.sub}
        </b>
        <br />
        {data.description}
        <footer>
          <button onClick={() => setShowRecipe((cur) => !cur)}>
            {showRecipe ? (
              <>
                <EyeSlashIcon className="icon-text" /> 레시피 닫기
              </>
            ) : (
              <>
                <EyeIcon className="icon-text" /> 레시피 보기
              </>
            )}
          </button>
          <button
            onClick={() => setShowBefore((cur) => !cur)}
            className="secondary">
            {showBefore ? (
              <>
                <SparklesIcon className="icon-text" /> 적용 후
              </>
            ) : (
              <>
                <ArrowPathIcon className="icon-text" /> 적용 전
              </>
            )}
          </button>
          <button className="outline secondary" onClick={handleBookmark}>
            <BookmarkSlashIcon className="icon-in-button" />
          </button>
          <button className="outline" onClick={handleShare}>
            <ShareIcon className="icon-in-button" />
          </button>
        </footer>
      </article>
    </dialog>
  );
}
