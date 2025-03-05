import Link from "next/link";
import { PageLayout } from "@/components/page-layout";

export default function Contact() {
  return (
    <PageLayout>
      <main className="article-section bg-white rounded-lg mt-20 mb-24">
        <section className="prose space-y-4 mb-24">
          <h1>Contact Nooranah</h1>
          <p className="text-lg">
            I'm seeking new opportunities to craft functional, efficient and
            delightful B2B/B2C products with a cross-functional team. I'm
            passionate about extending my broad design capalities to HealthTech
            that are focused on missions such as easing the existing and coming
            strain on Australia's healthcare system or improving health outcomes
            systemically.
          </p>
          <p className="text-lg pb-8">
            My email address is
            <Link href="/" className="underline">
              ranah.malberg(at)gmail.com
            </Link>
            . I typically respond within 2-3 business days.
          </p>
          <h2>Socials</h2>
          <ul className="text-lg pb-8">
            <li>LinkedIn</li>
            <li>Youtube Live</li>
            <li>Github (on occassion, I tend to a digital garden)</li>
            <li>Are.na (where I get inspired and follow connections)</li>
          </ul>
        </section>
        <section className="border border-stone-300 p-12 rounded-lg space-y-8 text-center">
          <h2>Crafting your design portfolio?</h2>
          <p>
            I can offer peer support and fresh eyes. Share your portfolio and
            choose if you'd prefer async or a video call on this form. I'll be
            in touch within 3 business days.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
