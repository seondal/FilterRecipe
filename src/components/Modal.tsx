import React, { ReactNode } from "react";

type LayoutT = "center" | "bottom";

interface ModalI {
  onClose: () => void;
  layout?: LayoutT;
  children: ReactNode;
}

const StyleByLayout: Record<LayoutT, React.CSSProperties> = {
  center: { alignItems: "center", padding: "4rem", justifyContent: "center" },
  bottom: {
    alignItems: "end",
    padding: "0rem",
  },
} as const;

const Modal = ({ onClose, children, layout = "center" }: ModalI) => {
  return (
    <div
      className="z-40 fixed max-w-mobile inset-0 m-auto bg-black bg-opacity-30 flex overflow-hidden"
      style={StyleByLayout[layout]}
      onClick={onClose}>
      <button className="absolute top-1 right-1 outline" onClick={onClose}>
        X
      </button>
      <div className="z-50 w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
