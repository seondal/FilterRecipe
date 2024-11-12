import { PlusCircleIcon } from "@heroicons/react/24/outline";

interface FileInputI {
  label?: string;
}

export default function FileInput({ label }: FileInputI) {
  return (
    <label htmlFor="fileInput">
      <div className="outline-dashed rounded-md flex justify-center aspect-square items-center">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
        />
        <PlusCircleIcon className="icon-text" />
        {label}
      </div>
    </label>
  );
}
