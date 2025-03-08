import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { BackgroundLayout } from "@/components/background-layout";

export default function Vocal() {
  return (
    <BackgroundLayout backgroundColor="bg-blue-100">
      <PageLayout>
        <main className="space-y-8 fade-in">
          <article className="prose prose-gray article-section">
            <img
              src="/images/Covetrus-Thumbnail.png"
              alt="Covetrus Thumbnail"
              className="mx-auto w-full md:w-[920px] mt-4 mb-12 shadow-lg"
            />
            <h1 className="font-semibold">
              Reduced safety risk through scheduling workflows
            </h1>
            <h2>Problem</h2>
            <p>
              In late 2023, vetarinary staff on Ascend were missing crucial
              detail of a pet's behavioural issue before and during client
              clinic visits. The existing behavioural notes feature on Ascend
              was suppressed at key points of their workflow, leading to safety
              risks and disruption at the clinic.
            </p>
            <h2>Outcome</h2>
            <p>
              From observations, maintaining focus within the software's context
              during a vet's workflow was important for busy vets and staff.
              This insight led to a comprehensive update of Ascend's scheduling
              user flows and patient details component. These updates helped in
              restoring relations and resulted in positive feedback from
              customers.
            </p>
            <h2>Team</h2>
            <ul className="grid grid-cols-2">
              <li>Nooranah Malberg (Me), UX Designer</li>
              <li>Martin, Product Manager</li>
              <li>Erin Lewis, Senior UX Designer</li>
              <li>Front-End Developer</li>
            </ul>
            <div className="pt-8">
              <a href="#Protoype" className="article-nav-link">
                Skip to solution
              </a>
            </div>
          </article>
          <article className="prose prose-gray article-section" id="Research">
            <img
              src="/images/Covetrus-Pendo.png"
              alt="Covetrus Pendo Feedback"
              className="mx-auto w-full md:w-[920px] mt-4 mb-12 bg-yellow-100 rounded-lg"
            />
            <h1>Research</h1>
            <p>
              This UX improvement was prioritised because of the votes it
              received on Pendo in total. Initially, customers requested for
              pop-ups to appear to warn them of pets with behavioural issues.
            </p>
            <p>
              We also knew that these behavioural notes were important in
              ensuring safety as well as avoiding chaos at reception. It was
              common practice for some clinics to administer treatment to pets
              with behavioural issues at the carpark for minimal disruption to
              other clients.
            </p>
            <p>
              For a better understanding of Covetrus software's context of use,
              I visited two clinics:
            </p>
            <ul>
              <li>A) A national franchised clinic using a legacy system</li>
              <li>B) an independent small business using Ascend.</li>
            </ul>
            <p>
              At A, I learnt that pop-ups were already implemented in the legacy
              system to alert vets of behavioural issues. The clinic manager
              mentioned that they weren't always effective as her vets often
              dismissed these pop-ups to proceed with the task at hand.
            </p>
            <p>
              At clinic visit B, the practice manager shared a personal anecdote
              of a safety incident where I realised the details of a patient's
              behaviorioul issue was just as important as the behavioural alert.
              Specific triggers of the pet or their preferred handling
              techniques were often captured in the behaioural notes to help
              other staff members in the clinic.
            </p>
          </article>
          <article className="prose prose-gray article-section" id="Wireframes">
            <h1>Wireframes</h1>
            <p>
              I initially sketched the pop-up alerts customers were asking
              despite evidence that it was unlikely to be the best solution.
              Thankully, Erin nudged me towards my other idea that could be
              consistently applied across all types of patient headers found in
              the product. It was an expandable "ribbon" that revealed the
              patient's notes when clicked.
            </p>
            <p>
              This allowed veterinary staff to remain focused on their task,
              saving them from navigating away to search for patient details. On
              first load, the notes were partially shown so that vets may
              recognise if they needed to expand that section.
            </p>
          </article>
          <article className="prose prose-gray article-section" id="Prototype">
            <h1>Prototype</h1>
            <p>
              We tested a few variations of the calendar and ribbons with
              customers to gather their input of the feature. The comprehensive
              update received positive feedback, so we moved forward with
              development.
            </p>
            <p>
              During hand-over, I included designs for the new patient ribbon
              component in different parts of the software and how it scaled at
              three common break-points.
            </p>
          </article>
          <article
            className="prose prose-gray article-section"
            id="Reflections"
          >
            <h1>Reflections</h1>
            <p>
              This project highlighted how thoughtful UX improvements can
              meaningfully support healthcare professionals in their daily work.
              By making critical patient information more accessible, we helped
              veterinary staff focus on what matters most - providing excellent
              care for their patients.
            </p>
            <p>
              Balancing many points of view was a new challenge as I wasn't sure
              if there would be more resources allocated to this feature in the
              future. New information often built upon previous assumuptions,
              expanding this initiative's scope. I eventually landed on a
              solution that was a mix of what the users asked for and what I
              thought was best for their needs.
            </p>
            <p>
              When I first started sketching solutions, I stuck to what the
              users asked for because of a solution-taker mindset. It was an
              irrational fear of challenging initial assumptions to propose
              different solutions. I'm glad the team at Covetrus encouraged me
              to try other ideas, leading me on a journey of shedding that
              mindset.
            </p>
          </article>
          <p className="text-sm text-gray-500 italic border-t border-gray-200 mt-8 pt-4">
            A practical example of how user-centered design can enhance
            workplace safety and efficiency.
          </p>
        </main>
      </PageLayout>
    </BackgroundLayout>
  );
}
