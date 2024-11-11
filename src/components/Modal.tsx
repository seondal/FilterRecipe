import React, { ReactNode } from "react";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div
      className="fixed max-w-mobile inset-0 m-auto p-4 bg-black bg-opacity-30 flex justify-center items-center overflow-hidden"
      onClick={onClose}>
      {children}
    </div>
  );
};

export default Modal;
