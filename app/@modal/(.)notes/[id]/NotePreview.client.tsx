"use client";

import css from "./NotePreview.module.css"

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

interface NotePreviewClientProps {
  id: string;
}
export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();

const { data: note } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });

  if (!note) return null;


  return (
    
<div className={css.container}>

 <button onClick={() => router.back()} className={css.backBtn}>
    Close
 </button>
   
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div> 


  );
}
