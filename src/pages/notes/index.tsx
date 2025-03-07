import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { PageLayout } from "@/components/page-layout";
import { getAllNotes, type Note } from "@/data/get-notes";
import Link from "next/link";

export const getStaticProps = (async () => {
  const notes = getAllNotes();
  const categories = Array.from(new Set(notes.map((note) => note.category)));

  return { props: { notes } };
}) satisfies GetStaticProps<{ notes: Note[]; categories: string[] }>;

export default function Notes({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <main className="container flex flex-row gap-12 py-16">
        <div class="prose space-y-4 w-[48%]">
          <h1>Digital garden</h1>
          <p>
            I publish and evolve my notes on the off-chance that it may spark
            thoughts or creative connections in you. You can see where I'm at
            with a particular topic as well. Always welcome a discussion on
            these topics.s
          </p>
        </div>
        <div class="space-y-8">
          <h2>Start here</h2>
          {notes
            .filter((note) => note.category === "featured")
            .map((note) => (
              <NoteCard key={note.title} {...note} />
            ))}
          <h2>All notes</h2>
          <ul className="grid grid-cols-2 gap-4">
            {notes.map((note) => (
              <NoteCard key={note.title} {...note} />
            ))}
          </ul>
        </div>
      </main>
    </PageLayout>
  );
}

function NoteCard({ title, slug }: Note) {
  return (
    <li className="border rounded-xl p-7 text-lg list-none">
      <Link href={`/notes/${slug}`}>{title}</Link>
    </li>
  );
}
