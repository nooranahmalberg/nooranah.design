import { Fragment, type PropsWithChildren } from "react";
import Link from "next/link";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

function Header() {
  return (
    <header className="container header py-4">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 object-cover rounded-full flex-shrink-0"
          src="/images/RanahMalberg-Smiling.jpg"
          alt="Headshot of Nooranah Malberg"
        />
        <Link href="/" className="header-nav-link text-base md:text-lg">
          <span>Nooranah Malberg</span>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-4 md:gap-6">
          <HeaderNavLink href="/">Home</HeaderNavLink>
          <HeaderNavLink href="/contact">Work</HeaderNavLink>
          <HeaderNavLink href="/notes">Writing</HeaderNavLink>
          <HeaderNavLink href="/about">About</HeaderNavLink>
        </ul>
      </nav>
    </header>
  );
}

function HeaderNavLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <li>
      <Link
        href={href}
        className="header-nav-link text-base md:text-lg hover:underline hover:underline-offset-8 transition-all ease-in-out duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th"; // handles 11th to 13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function Footer() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(day);
  return (
    <footer className="text-center py-8 bg-stone-900 text-white font-Roobert">
      <p>
        &copy; Designed and built by Nooranah Malberg, last updated on {day}
        {ordinalSuffix} {month} {year}
      </p>
    </footer>
  );
}
