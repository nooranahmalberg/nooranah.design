import { PageLayout } from "@/components/page-layout";

export default function Vocal() {
  return (
    <div className="bg-emerald-100 text-black ">
      <PageLayout>
        <div className="container max-w-3xl mx-auto space-y-8 py-8">
          <main className="px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg">
            <article className="prose prose-gray max-w-none">
              <h1>How I boosted student enrolments by up to 15%</h1>
              <p>
                At Enrola, I enhanced the conversion rate and usability of their
                digital education comparison and got a taste of
                experimentatation-led design with a small dedicated team at an
                early-stage startup.
              </p>
              <h2>It sucked that...</h2>
              <p>
                Enroal was facing a high proportion of unqualified leads, which
                slowed down enrolment processes in late 2024. 1 in 4 prospective
                students were applying to the wrong courses. And if they did
                apply to the right course, students often missed key practical
                course details. This slowed down student enrolments and meant
                less time was spent on connecting serious prospective students
                with a training provider.
              </p>
              <h2>Identifying the problems</h2>
              <p>
                First, I identified scannability and visual hierarchy issues by
                going through the flow and putting myselves in the shoes of a
                prospective student. This exercise was helpful to get an idea of
                what some frustrations are intuitively. I then ran a rough
                analysis of AI chat records and gathered from team members the
                top information that students were clearly missing, and what
                they should know before deciding on the right vocational
                training partner.
              </p>
              <p>
                In the final design, I leveraged previous A/B tests my team
                members ran and combined it with the new learnings in a full
                flow redesign. I prioritised the key information that students
                needed to know and introduced a new row to connect the results
                screen with the course advisor quiz. The results? A boost in
                enrolments by up to 15% and a significant drop in students that
                were applying to the wrong courses.
              </p>
              <h2>A page-by-page approach to design</h2>
              <h3>Based on key conversion metrics</h3>
              <li>Student complete quiz and receive course recommendations</li>
              <li>They apply to enrol from comparison view</li>
              <li>They view course details and apply</li>
              <p>
                On the comparison page, I leveraged previous A/B tests my team
                members ran and combined it with the new learnings in a full
                flow redesign. I prioritised the key information that students
                needed to know and introduced a new row to connect the results
                screen with the course advisor quiz. The results? A boost in
                enrolments by up to 15% across every test and a significant drop
                in students that were applying to the wrong courses.
              </p>
              <p>
                What I’d follow this up with if I could: Because the comparison
                results were not bound to quiz answers and also showed a
                non-matching option, I’d run an intercept survey to measure
                their attitudes towards the results. This would be particularly
                helpful for users bounced at that point in the app to understand
                why they did not proceed within the context of their online
                education research journey.
              </p>
              <h2>Growing inconsistencies</h2>
              <p>
                The caveat of shipping app designs page-by-page was that, while
                it sped up the design process, minor inconsistencies often
                cropped up. While we did use Bootstrap to maintain some
                cohesion, the visual direction was not clearly defined at the
                start. This led to a delivery of UI kit that addressed the
                inconsistencies with a holistic update of visual design choices.
              </p>
              <h2>Reflections and takeaway</h2>
              <p>
                I think one major takeaway from this project was that designing
                solo truly requires forethought on all aspects of design. I wish
                I asked more foundational questions early on about visual
                direction and tackled the designs more holistically at the
                start. Particularly for an early-stage startup, visual cohesion
                and direction is important to differentiate from competiors and
                build trust as a new business.
              </p>
              <p>
                As a newbie at conversion rate optimisation, I also was way too
                obsessed with looking for the silver bullet of an idea on Built
                for Mars, Substack and Mobbin's ABtesting. Referring to other
                products is an excellent way to get an idea of what works or
                even what's being tested. But it's also important to remember
                that every product is unique to their users and their needs.
              </p>
              <p>
                Designing with the underlying data structure in mind helped save
                time when it came to design and implementation. It was useful to
                have the back-end content console as a reference point to ensure
                that the design was in line structurally.
              </p>
            </article>
          </main>
        </div>
      </PageLayout>
    </div>
  );
}
