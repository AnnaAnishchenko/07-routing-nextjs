import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";


interface NotesByCategoryProps {
  params: { slug: string[] };
}
async function NotesByCategory({params}: NotesByCategoryProps) {
const slugParam = params.slug?.[0] ?? "all";
  const slug = slugParam === "all" ? undefined : (slugParam as NoteTag);

  const data = await fetchNotes("", 1, slug);

  return <NoteList key={slugParam} notes={data.notes} />;
}

export default NotesByCategory;



