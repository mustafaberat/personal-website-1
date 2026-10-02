import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteHead from "./SiteHead";
import Sidebar from "./Sidebar";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Header({ title, description, path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <SiteHead title={title} description={description} path={path} />
      <div className="container">
        <Link href="/" className="header-logo">
          <Image
            src="/m-darkBlue.png"
            alt="Mustafa Berat ARU"
            width={40}
            height={40}
            sizes="40px"
          />
        </Link>
        <div
          className={`header-buttons${menuOpen ? " is-open" : ""}`}
        >
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="header-button">
              {label}
            </Link>
          ))}
        </div>
        <Sidebar open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      </div>
    </header>
  );
}
