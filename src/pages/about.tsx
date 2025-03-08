import { PageLayout } from "@/components/page-layout";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ProfilePic from "../../public/images/RanahMalberg Profile Pic.png";

export default function About() {
  return (
    <PageLayout>
      <main className="container">
        <div class="w-[550px]">
          <h1 class="py-8">
            Nooranah Malberg is a digital product designer based in Brisbane,
            Australia.
          </h1>
        </div>
        <section className="pt-4 mb-32 flex flex-row gap-16 items-top">
          <Image
            src={ProfilePic}
            width={500}
            height={500}
            alt="Ranah Malberg"
            className="w-[500px] h-[450px] object-cover object-center overflow-hidden"
          />
          <div className="prose pt-16">
            <h1>Apa khabar 👋</h1>
            <p className="text-lg">
              I'm driven by purpose and looking to make a positive difference on
              users and customers.
            </p>
            <p className="text-lg">
              I'm an experienced UX/UI designer based in Brisbane, Australia
              with 5 years of experience crafting digital solutions across a
              range of industries from animal healthcare to education.
            </p>
            <p className="text-lg">
              I'm an experienced UX/UI designer based in Brisbane, Australia
              with 5 years of experience crafting digital solutions across a
              range of industries from animal healthcare to education.
            </p>
            <p className="text-lg">
              I'm an experienced UX/UI designer based in Brisbane, Australia
              with 5 years of experience crafting digital solutions across a
              range of industries from animal healthcare to education.
            </p>
          </div>
        </section>
        <section class="w-[90%] mx-auto p-10 md:p-16 bg-mutedForest rounded-lg space-y-8 mb-32">
          <h1 className="text-2xl font-bold mb-4">Professional experience</h1>
          <table class="table-auto text-lg md:text-xl gap-4">
            <thead class="hidden">
              <tr class="w-full">
                <th>Year</th>
                <th>Role and Company</th>
              </tr>
            </thead>
            <tbody>
              <tr class="w-full">
                <td>2024-2025</td>
                <td class="py-3 px-3 md:px-9">Product Design, Enrola</td>
              </tr>
              <tr class="w-full">
                <td>2023</td>
                <td class="py-3 px-3 md:px-9">UX/UI Designer, Covetrus</td>
              </tr>
              <tr class="w-full">
                <td>2020-2022</td>
                <td class="py-3 px-3 md:px-9">Product Designer, Thinkmill</td>
              </tr>
              <tr class="w-full">
                <td>2016-2018</td>
                <td class="py-3 px-3 md:px-9">Junior UI Designer, GO1</td>
              </tr>
            </tbody>
          </table>
          <p>
            <a href="/" className="underline text-xl">
              View CV on Google Drive
            </a>
          </p>
        </section>
        <SectionHobbies />
      </main>
    </PageLayout>
  );
}

function SectionHobbies() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`w-[90%] mx-auto rounded-lg space-y-8 mb-32 transition-on-scroll ${
        inView ? "in-view" : ""
      } `}
    >
      <h1 className="text-2xl font-bold text-center">Outside of work, I...</h1>
      <ul className="text-lg grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="bg-mutedMango rounded-lg p-8">
          Catch up over board games.
        </li>
        <li className="bg-mutedMango rounded-lg p-8">
          Recharge at the library.
        </li>
        <li className="bg-mutedMango rounded-lg p-8">
          Travel to experience local food and culture.
        </li>
      </ul>
    </section>
  );
}
