"use client";

import { CATEGORY, PROPERTIES } from "@/constants";
import { useState } from "react";

const NO_SELECTION = "선택 안함";
const ETC = "기타";

export default function UploadPage() {
  const [selectedMain, setSelectedMain] = useState(NO_SELECTION);
  return (
    <form className="*:text-xs">
      <label>
        레시피 이름
        <input
          maxLength={20}
          name="title"
          placeholder="ex. 지브리 감성 뭉게구름 보정법"
          required
        />
      </label>

      <label>
        카테고리
        <fieldset className="flex">
          <select
            name="main"
            value={selectedMain}
            onChange={(e) => setSelectedMain(e.target.value)}>
            <option>{NO_SELECTION}</option>
            {CATEGORY.map((item) => (
              <option key={item.text}>{item.text}</option>
            ))}
            <option>{ETC}</option>
          </select>
          {selectedMain === ETC ? (
            <input name="sub" placeholder="카테고리를 입력해주세요" required />
          ) : (
            selectedMain !== NO_SELECTION && (
              <select name="sub">
                {CATEGORY.find((main) => main.text === selectedMain)?.sub.map(
                  (item) => (
                    <option key={item}>{item}</option>
                  )
                )}
              </select>
            )
          )}
        </fieldset>
      </label>

      <fieldset className="flex flex-wrap">
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
        className="outline"
        value="레시피 등록하기"
        disabled={selectedMain === NO_SELECTION}
      />
    </form>
  );
}
