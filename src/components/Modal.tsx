import React, { ReactNode } from "react";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="z-40 fixed max-w-mobile inset-0 m-auto p-16 bg-black bg-opacity-30 flex justify-center items-center overflow-hidden">
      <button className="absolute top-1 right-1" onClick={onClose}>
        X
      </button>
      {children}
    </div>
  );
};

export default Modal;
