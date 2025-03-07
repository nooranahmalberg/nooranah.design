import Link from "next/link";
import { PageLayout } from "@/components/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <main className="container space-y-6">
        <div className="h-[980px] rounded-xl m-auto flex flex-row items-center gap-7 p-16 bg-mutedMango">
          <div className="space-y-4">
            <p className="text-lg font-Roobert">Hi, I'm Ranah (She/Her/Hers)</p>
            <h1 className="text-4xl leading-[1.2em]">
              Brisbane-based Product Designer
            </h1>
            <p className="text-lg font-Roobert">
              I specialise in UX/UI design and design systems, and have a broad
              background in visual design, conversion marketing and front-end
              development. My design process is purpose-led.
              <Link href="/contact" className="underline">
                Contact
              </Link>
            </p>
          </div>
          <img
            src="./images/RanahMalbergProfile.png"
            className="w-[750px] h-[500px] rounded-md"
          />
        </div>
        <div className="bg-sky-100 h-8 p-16 rounded-lg flex flex-row gap-6 items-center justify-center text-xl font-Roobert text-center">
          <span class="font-sans font-bold">Major Generalist Vibes</span>
          <span>Visual Design</span>
          <span>Interaction Design</span>
          <span>UX Design</span>
          <span>Design Systems</span>
        </div>
        <section className="space-y-16 pb-24">
          <div className="flex flex-row gap-4 items-center -mb-6 pt-20">
            <span className="font-Roobert text-lg whitespace-nowrap">
              Selected Work
            </span>
            <div className="w-full h-[0.5px] bg-stone-300"></div>
            <span className="font-Roobert text-lg whitespace-nowrap">
              [ 3 UX/UI Design • 2 Design Systems ]
            </span>
          </div>
          <Link href="/work/covetrus" className="project-card bg-stone-100">
            <h2>Reduced safety risk in clinical scheduling workflows</h2>
            <p className="text-xl font-Roobert">
              At Covetrus, I enhanced a safety-related feature on their
              cloud-based veterinary practice, restoring customer relations and
              satisfaction with the cloud-based clinical management system.
            </p>
            <div className="flex gap-2">
              <span className="pill">UX/UI design</span>
              <span className="pill">2 mins</span>
            </div>
            <div className="rounded-md">
              <div className="bg-[url('/images/Covetrus-Thumbnail.png')] project-thumbnail"></div>
            </div>
          </Link>
          <Link href="/work/enrola" className="project-card bg-stone-100">
            <h2>Streamlined student enrollment process for conversion</h2>
            <p className="text-xl font-Roobert">
              At Enrola, I refined an MVP for usability and conversion with
              early-stage startup founders and key stakeholders, resulting in up
              to 15% increase in student enrolments.
            </p>
            <div className="flex gap-2">
              <span className="pill">UX/UI design</span>
              <span className="pill">Experimentation</span>
              <span className="pill">2 mins</span>
            </div>
            <div className="rounded-md">
              <div className="bg-[url('/images/Enrola-Thumbnail.png')] project-thumbnail"></div>
            </div>
          </Link>
          <Link href="/work/vocal" className="project-card bg-stone-100">
            <h2>New monetisation features for creative writers</h2>
            <p className="text-xl font-Roobert">
              With Thinkmill and Vocal, I contributed to a generative research
              project and delivered new features that increased engagement on
              Vocal.
            </p>
            <div className="flex gap-2">
              <span className="pill">UX/UI design</span>
              <span className="pill">2 mins</span>
            </div>
            <div className="rounded-md">
              <div className="bg-[url('/images/Vocal-Thumbnail.png')] project-thumbnail"></div>
            </div>
          </Link>
        </section>
        <section className="bg-mutedMango h-600 w-full">
          <div className="container mx-auto px-16 py-32 space-y-6">
            <h1>Get in touch</h1>
            <div className="flex flex-row gap-4">
              <div className="bg-white p-12 w-3/4 rounded-lg">
                <p>I'm open to work!</p>
                <a href="/" className="button">
                  Email
                </a>
              </div>
              <div className="bg-white p-12 rounded-lg">
                <p>I'm open to work!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
