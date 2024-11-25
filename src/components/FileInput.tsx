"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface FileInputI {
  id: string;
  label?: string;
  setImage: Dispatch<SetStateAction<File | undefined>>;
}

export default function FileInput({ id, label, setImage }: FileInputI) {
  const [previewUrl, setPreviewUrl] = useState<string>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file !== undefined) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <label
      htmlFor={id}
      className="relative outline-dashed rounded-md flex justify-center aspect-square items-center">
      <input
        type="file"
        id={id}
        name={id}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {previewUrl ? (
        <Image src={previewUrl} alt="" fill sizes="100%" />
      ) : (
        <>
          <PlusCircleIcon className="icon-text" />
          {label}
        </>
      )}
    </label>
  );
}
