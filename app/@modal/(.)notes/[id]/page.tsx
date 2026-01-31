

import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css"
import Modal from "@/components/Modal/Modal";


interface NotePreviewProps {
    params : Promise <{id:string}>
}

async function NotePreview ({params}: NotePreviewProps) {
    const {id} = await params;
    const note = await fetchNoteById(id)



return (
<Modal>
<div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
        {/* <button onClick={handleClose} className={css.backBtn}   >Close</button> */}
      </div>
    </div>
</Modal>

 
   
  );

}


export default NotePreview;