import { PageLayout } from "@/components/page-layout";

export default function Now() {
  return (
    <PageLayout>
      <main className="container space-y-8 mt-20 mb-24">
        <section className="article-section prose prose-gray bg-mutedForest">
          <h1>Now</h1>
          <li className="text-lg">
            Finding my 'why' with guidance from Women in Technology's mentoring
            program
          </li>
        </section>
        <section className="article-section prose prose-gray bg-stone-100">
          <h1>Past</h1>
          <h2>Late 2024</h2>
          <li className="text-lg">
            Optimised an MVP for usability and conversion at Enrola
          </li>
          <li className="text-lg">
            Refined an experimentation-led product design process
          </li>
          <li className="text-lg">
            Studied conversion rate optimisation with CXL Academy
          </li>
        </section>
      </main>
    </PageLayout>
  );
}
