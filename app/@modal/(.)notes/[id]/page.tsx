
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";

interface NotePreviewProps {
    params : Promise <{id:string}>
}

async function NotePreview ({params}: NotePreviewProps) {
    const {id} = await params;
    

 const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });



return (
  <HydrationBoundary state={dehydrate(queryClient)}>
    <Modal>
      <NotePreviewClient id={id} />
</Modal>
  </HydrationBoundary>
   
  );

}


export default NotePreview;