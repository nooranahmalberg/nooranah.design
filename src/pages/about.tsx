import { PageLayout } from "@/components/page-layout";

export default function About() {
  return (
    <PageLayout>
      <main className="container">
        <div className="bg-mutedMango w-full h-[400px] rounded-lg"></div>
        <div className="py-12 flex flex-row gap-16 items-top">
          <div className="grid grid-cols-1">
            <img
              src="./images/RanahMalberg Profile Pic.png"
              alt="Ranah Malberg"
              className="w-full h-[450px] overflow-hidden rounded-md"
            />
            <img
              src="./images/RanahMalberg Profile Pic.png"
              alt="Ranah Malberg"
              className="w-full h-[450px] overflow-hidden rounded-md"
            />
          </div>
          <div className="prose pt-16">
            <h1>About Ranah</h1>
            <p className="text-lg">
              I'm an experienced UX/UI designer based in Brisbane, Australia
              with 5 years of experience crafting digital solutions across a
              range of industries from animal healthcare to education.
            </p>
            <p className="text-lg">
              I'm driven by purpose and looking to make a positive difference on
              users and customers.
            </p>
            <h2 className="text-2xl font-bold mb-4">Professional experience</h2>
            <a href="/" className="header-nav-link w-fit text-lg">
              View CV on Google Drive
            </a>
            <div className="text-lg">
              <li>2024: Product Designer, Enrola</li>
              <li>2023: UX/UI Designer, Covetrus</li>
              <li>2020-2022: Product Designer, Thinkmill</li>
              <li>2016 - 2018: Junior Designer, Go1</li>
            </div>
            <h2 className="text-2xl font-bold">Outside of work, I...</h2>
            <div className="text-lg">
              <li>Catch up over board games.</li>
              <li>Recharge and read magazines at the library.</li>
              <li>Travel and experience local food and culture.</li>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
