"use client";
import css from "./NotePreview.module.css"

import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={css.backBtn}>
      Close
    </button>
  );
}
