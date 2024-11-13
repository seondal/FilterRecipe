"use client";

import FileInput from "@/components/FileInput";
import { CATEGORY, PROPERTIES } from "@/constants";
import { useState } from "react";

const NO_SELECTION = "선택 안함";
const ETC = "기타";

export default function UploadPage() {
  const [selectedMainCategory, setSelectedMainCategory] =
    useState(NO_SELECTION);
  const [beforeImage, setBeforeImage] = useState<File>();
  const [afterImage, setAfterImage] = useState<File>();

  return (
    <form encType="multipart/form-data" method="POST">
      <label>
        레시피 이름
        <input
          maxLength={20}
          name="title"
          placeholder="ex. 지브리 감성 뭉게구름 보정법"
          required
        />
      </label>
      <hr />
      <fieldset className="flex *:flex-1 gap-4">
        <FileInput
          label="레시피 적용 전"
          setImage={setBeforeImage}
          id="beforeImage"
        />
        <FileInput
          label="레시피 적용 후"
          setImage={setAfterImage}
          id="afterImage"
        />
      </fieldset>
      <small>
        레시피기 적용되지 않았거나 부적절한 이미지는 삭제될 수 있어요
      </small>
      <label>
        카테고리
        <fieldset className="flex">
          <select
            name="main"
            value={selectedMainCategory}
            onChange={(e) => setSelectedMainCategory(e.target.value)}>
            <option>{NO_SELECTION}</option>
            {CATEGORY.map((item) => (
              <option key={item.text}>{item.text}</option>
            ))}
            <option>{ETC}</option>
          </select>
          {selectedMainCategory === ETC ? (
            <input name="sub" placeholder="카테고리를 입력해주세요" required />
          ) : (
            selectedMainCategory !== NO_SELECTION && (
              <select name="sub">
                {CATEGORY.find(
                  (main) => main.text === selectedMainCategory
                )?.sub.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            )
          )}
        </fieldset>
      </label>

      <fieldset className="flex flex-wrap *:w-20">
        {PROPERTIES.map((item) => (
          <label key={item.key}>
            {item.name}
            <input
              type="number"
              name={item.key}
              max={item.max}
              min={item.min}
              maxLength={3}
              defaultValue={0}
            />
          </label>
        ))}
      </fieldset>
      <label>
        설명 <textarea maxLength={300} name="description" />
      </label>
      <input
        type="submit"
        value="레시피 등록하기"
        disabled={selectedMainCategory === NO_SELECTION}
      />
    </form>
  );
}
