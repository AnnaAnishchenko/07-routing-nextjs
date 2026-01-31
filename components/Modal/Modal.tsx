"use client";

import type { MouseEvent } from "react";
import { useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;

}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const handleClose = () => {
           router.back()
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, []);

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) handleClose();
  }

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>{children}</div>
      <button onClick={handleClose}   >
        Close
      </button>
    </div>,
    document.body,
  );
}
