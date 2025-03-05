import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { PageLayout } from "@/components/page-layout";
import { getAllNotes, type Note } from "@/data/get-notes";
import Link from "next/link";

export const getStaticProps = (async () => {
  const notes = getAllNotes();
  return { props: { notes } };
}) satisfies GetStaticProps<{ notes: Note[] }>;

export default function Notes({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <main className="article-section bg-white rounded-lg mt-20 mb-24">
        <h1>Notes</h1>
        <ul className="grid grid-cols-2 gap-4">
          {notes.map((note) => (
            <NoteCard key={note.title} {...note} />
          ))}
        </ul>
      </main>
    </PageLayout>
  );
}

function NoteCard({ title, slug }: Note) {
  return (
    <li className="border rounded-xl p-7">
      <Link href={`/notes/${slug}`}>{title}</Link>
    </li>
  );
}
