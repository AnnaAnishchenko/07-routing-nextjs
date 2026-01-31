import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";


interface NotesByCategoryProps {
  params: { tag: string[] };
}
async function NotesByCategory({params}: NotesByCategoryProps) {
const tagParam = params.tag?.[0] ?? "all";
  const tag = tagParam === "all" ? undefined : (tagParam as NoteTag);

  const data = await fetchNotes("", 1, tag);

  return <NoteList key={tagParam} notes={data.notes} />;
}

export default NotesByCategory;



