import Link from "next/link";
import { PageLayout } from "@/components/page-layout";

export default function Contact() {
  return (
    <PageLayout>
      <main className="container">
        <div class="w-[550px]">
          <h1 class="py-8">
            Open to new digital product design opportunities.
          </h1>
        </div>
        <section className="pt-4 mb-32 flex flex-row gap-16 items-top">
          <img
            src="./images/RanahMalberg Profile Pic.png"
            alt="Ranah Malberg"
            className="w-[500px] h-[450px] object-cover object-center overflow-hidden"
          />
          <div className="prose pt-16">
            <h1>Hey 👋</h1>
            <p className="text-lg">
              I'm an experienced UX/UI designer based in Brisbane, Australia
              with 5 years of experience crafting digital solutions across a
              range of industries from animal healthcare to education.
            </p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
