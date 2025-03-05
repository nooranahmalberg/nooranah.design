import Link from "next/link";
import { PageLayout } from "@/components/page-layout";

export default function Vocal() {
  return (
    <PageLayout>
      <main>
        <div className="prose dark:prose-invert mx-auto">
          <h1>Connecting writers with their readers</h1>
          <h2>Role</h2>
          <p>
            In 2022, I worked with Vocal as a product designer at Thinkmill to
            address the challenge of reducing churn rates from their monthly
            premium subscription, Vocal+. The team consisted of a design lead,
            two product designers (including myself), two engineers and a
            product manager.
          </p>
          <h2>Problem</h2>
          <img
            alt="Vocal+ sign up, Vocal Wallet and Vocal challenges on mobile"
            src="/images/Vocal-Subscription.png"
          />
          <p>
            Vocal, a platform empowering writers to focus on their craft, faced
            a significant hurdle: it was difficult to grow readership. Some
            users reported canceling their subscriptions when their earnings
            from reads didn't cover the cost of subscription to Vocal+. Our goal
            was to enhance engagement and build a thriving community for both
            readers and writers.
          </p>
          <h2>Hypothesis</h2>
          <p>
            Drawing insights from user-submitted reviews and online forums, we
            hypothesized that fostering a strong sense of community and
            facilitating ongoing interaction between users would increase
            engagement and attract more readers. Additionally, we believed that
            enabling readers to tip creators on an ongoing basis would lead to
            higher retention rates among Vocal+ writers by allowing better
            predictions of expected earnings.
          </p>
          <h2>Method</h2>
          <p>
            We conducted a comprehensive survey of 3,000 Vocal users to measure
            attitudes towards receiving ongoing tips from readers.
          </p>
          <p>
            Subsequently, we organized focus group sessions with participants
            from US, UK, Australia and New Zealand. During these sessions, we
            tested ideas that centered around increasing connection with readers
            and building a community around content.
          </p>
          <h2>Challenge</h2>
          <p>
            One of the main challenges was the limited representation of
            dedicated Vocal readers in our survey sample. However, we mitigated
            this by leveraging insights from creators and focusing on ways to
            enhance reader engagement through the guidance of Vocal creators.
          </p>
          <h2>Solutions</h2>
          <h3>Ongoing subscriptions</h3>
        </div>
        <div className="max-w-4xl mx-auto py-8"></div>
        <div className="prose dark:prose-invert mx-auto">
          <p>
            While the ability to tip was already supported on Vocal, we
            encouraged users to further show support to their favorite creators
            through an ongoing contribution called Pledge.
          </p>
          <h3>Updated Profile</h3>
          <img
            src="/images/Vocal-UpdatedProfile.png"
            alt="Before and after screenshots of the Vocal profile page"
          />
          <p>
            We revamped the profile and story layout to serve as more than just
            a platform for sharing stories. Writers often use Vocal as a
            portfolio to showcase their work, so I optimized the layout for
            readability and consistency with the Vocal Design System.
          </p>
          <h3>Reader insights</h3>
          <p>
            Recognizing the desire for feedback on writing, we introduced
            features to provide insightful feedback to creators, regardless of
            their experience level, helping them improve their craft.
          </p>
          <h3>Mobile app for readers</h3>
          <p>
            To enhance the reading experience and further promote community
            engagement, we developed a dedicated mobile app tailored to the
            needs of readers. .
          </p>
          <h2>Impact</h2>
          <p>
            Following the implementation of these solutions, Vocal experienced a
            notable increase in user engagement. Specifically, we observed over
            60,000 comments being exchanged in the first month, indicating the
            effectiveness of our approach in fostering a stronger sense of
            community on the platform.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-between pt-24 pb-8">
          <Link href="/work/covetrus" className="read-next">
            <svg
              className="w-5 h-5 opacity-60"
              viewBox="0 0 8 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 5H3.41002L6.71002 1.71C6.89832 1.52169 7.00411 1.2663 7.00411 0.999999C7.00411 0.733697 6.89832 0.478302 6.71002 0.289999C6.52172 0.101695 6.26632 -0.00409317 6.00002 -0.00409317C5.73372 -0.00409317 5.47832 0.101695 5.29002 0.289999L0.290018 5.29C0.198978 5.3851 0.127613 5.49725 0.0800184 5.62C-0.0199996 5.86346 -0.0199996 6.13654 0.0800184 6.38C0.127613 6.50275 0.198978 6.61489 0.290018 6.71L5.29002 11.71C5.38298 11.8037 5.49358 11.8781 5.61544 11.9289C5.7373 11.9797 5.86801 12.0058 6.00002 12.0058C6.13203 12.0058 6.26274 11.9797 6.3846 11.9289C6.50645 11.8781 6.61706 11.8037 6.71002 11.71C6.80375 11.617 6.87814 11.5064 6.92891 11.3846C6.97968 11.2627 7.00582 11.132 7.00582 11C7.00582 10.868 6.97968 10.7373 6.92891 10.6154C6.87814 10.4936 6.80375 10.383 6.71002 10.29L3.41002 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8947 6.51957 12 6.26521 12 6C12 5.73478 11.8947 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5Z" />
            </svg>

            <div className="flex flex-col gap-1">
              <span className="opacity-80 text-base">Covetrus</span>Minimising
              risk to safety for veterinary staff
            </div>
          </Link>
          <Link href="work/enrola" className="read-next">
            <div className="flex flex-col gap-1">
              <span className="opacity-80 text-base">Go1</span>Equipping
              employers with learning insights
            </div>
            <svg
              className="w-5 h-5 opacity-60"
              viewBox="0 0 8 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.92 5.62C11.8724 5.49725 11.801 5.3851 11.71 5.29L6.71 0.289999C6.61676 0.19676 6.50607 0.122799 6.38425 0.0723391C6.26243 0.0218787 6.13186 -0.00409317 6 -0.00409317C5.7337 -0.00409317 5.4783 0.101695 5.29 0.289999C5.19676 0.383237 5.1228 0.493927 5.07234 0.615749C5.02188 0.737571 4.99591 0.868139 4.99591 0.999999C4.99591 1.2663 5.1017 1.52169 5.29 1.71L8.59 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26521 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H8.59L5.29 10.29C5.19627 10.383 5.12188 10.4936 5.07111 10.6154C5.02034 10.7373 4.9942 10.868 4.9942 11C4.9942 11.132 5.02034 11.2627 5.07111 11.3846C5.12188 11.5064 5.19627 11.617 5.29 11.71C5.38296 11.8037 5.49356 11.8781 5.61542 11.9289C5.73728 11.9797 5.86799 12.0058 6 12.0058C6.13201 12.0058 6.26272 11.9797 6.38458 11.9289C6.50644 11.8781 6.61704 11.8037 6.71 11.71L11.71 6.71C11.801 6.61489 11.8724 6.50275 11.92 6.38C12.02 6.13654 12.02 5.86346 11.92 5.62Z" />
            </svg>
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}
