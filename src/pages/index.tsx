import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { PageLayout } from "@/components/page-layout";
import covetrusImg from "../../public/images/Covetrus-Thumbnail.png";
import enrolaImg from "../../public/images/Enrola-Thumbnail.png";
import vocalImg from "../../public/images/Vocal-Thumbnail.png";

export default function Home() {
  return (
    <PageLayout>
      <main>
        <section class="container space-y-6">
          <div className="h-[980px] rounded-xl m-auto flex flex-row items-center gap-7 p-16 bg-mutedMango">
            <div className="space-y-4">
              <p className="text-lg font-Roobert">
                Hi, I'm Ranah (She/Her/Hers)
              </p>
              <h1 className="text-4xl leading-[1.2em]">
                Brisbane-based Product Designer
              </h1>
              <p className="text-lg font-Roobert">
                I specialise in UX/UI design and design systems, and have a
                broad background in visual design, conversion marketing and
                front-end development. My design process is purpose-led.
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
            <span class="font-sans font-bold">@nooranah.design</span>
            <span>Design with me every Monday on YouTuve Live</span>
          </div>
        </section>
        <section className="container space-y-16 pb-24">
          <div className="flex flex-row gap-4 items-center -mb-6 pt-20">
            <span className="font-Roobert text-lg whitespace-nowrap">
              Selected Work
            </span>
            <div className="w-full h-[0.5px] bg-stone-300"></div>
            <span className="font-Roobert text-lg whitespace-nowrap">
              [ 3 UX/UI Design • 2 Design Systems ]
            </span>
          </div>
          <ProjectCard
            title="Reduced safety risk in clinical scheduling workflows"
            slug="covetrus"
            description="At Covetrus, I enhanced a safety-related feature on their cloud-based veterinary practice, restoring customer relations and satisfaction with the cloud-based clinical management system."
            tags={["UX/UI design", "2 mins"]}
            imgProps={{ ...covetrusImg, alt: "Vocal thumbnail" }}
          />
          <ProjectCard
            title="Streamlined student enrollment process for conversion"
            slug="enrola"
            description="At Enrola, I refined an MVP for usability and conversion with early-stage startup founders and key stakeholders, resulting in up to 15% increase in student enrolments."
            tags={["Experimentation", "UX/UI design", "2 mins"]}
            imgProps={{ ...enrolaImg, alt: "Vocal thumbnail" }}
          />
          <ProjectCard
            title="New monetisation features for creative writers"
            slug="vocal"
            description="With Thinkmill and Vocal, I contributed to a generative research project and delivered new features that increased engagement on Vocal."
            tags={["UX/UI design", "2 mins"]}
            imgProps={{ ...vocalImg, alt: "Vocal thumbnail" }}
          />
        </section>
        <section class="container space-y-8 pb-32">
          <h1 class="text-center">End-to-end design process</h1>
          <div class="flex flex-col md:flex-row gap-6 mx-auto">
            <div class="p-12 md:p-16 bg-mutedMango w-full rounded-lg space-y-4">
              <h2>Problem-oriented</h2>
              <ul class="text-lg">
                <li class="list-disc list-inside">
                  Empathise and consult a range of stakeholders to understand
                  goals, needs and constraints
                </li>
                <li class="list-disc list-inside">
                  Unpack ambiguous problems and pin point key issues
                </li>
                <li class="list-disc list-inside">
                  Champion individual experiences within the broader context as
                  a business
                </li>
              </ul>
            </div>
            <div class="p-12 md:p-16 bg-mutedForest w-full rounded-lg space-y-4">
              <h2>Solution-oriented</h2>
              <ul class="text-lg">
                <li class="list-disc list-inside">
                  Define sucess metrics early and formulate a hypothesis
                </li>
                <li class="list-disc list-inside">
                  Support the team continuously throughout development
                </li>
                <li class="list-disc list-inside">
                  Committed to my craft and adhere to the principles of UX and
                  visual communications
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-stone-100 p-20">
          <div class="container text-center">
            <a href="/" class="font-Roobert text-4xl hover:underline">
              ranah.malberg@gmail.com
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  imgProps: StaticImageData & { alt: string };
};

function ProjectCard({
  title,
  slug,
  description,
  tags,
  imgProps,
}: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.65,
    triggerOnce: true,
  });

  return (
    <Link href={`/work/${slug}`} className="project-card bg-stone-100">
      <h2>{title}</h2>
      <p className="text-xl font-Roobert">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>
      <Image
        ref={ref}
        className={`transition-on-scroll ${
          inView ? "in-view" : ""
        } object-cover w-full h-[full]`}
        {...imgProps}
      />
    </Link>
  );
}
