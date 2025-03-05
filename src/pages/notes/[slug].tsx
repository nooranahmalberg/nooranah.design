import { NotesRenderer } from "@/components/notes-renderer";
import { PageLayout } from "@/components/page-layout";
import { getAllNotes, Note } from "@/data/get-notes";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

export const getStaticPaths = (async () => {
  const notes = getAllNotes();
  return {
    paths: notes.map((note) => ({
      params: {
        slug: note.title,
      },
    })),
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const allNotes = getAllNotes();
  const note = allNotes.find((note) => note.slug === slug);

  if (!note) {
    return { notFound: true };
  }

  return {
    props: {
      note,
    },
  };
}) satisfies GetStaticProps<{ note: Note }>;

export default function Page({
  note,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <main className="article-section bg-white rounded-lg mt-20 mb-24">
        <section className="prose space-y-4 mb-24">
          <h1>{note.title}</h1>
          <NotesRenderer content={note.content} />
        </section>
      </main>
    </PageLayout>
  );
}
