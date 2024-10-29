import Link from "next/link";
import MyHead from "./MyHead";
import SidebarComp from "./SidebarComp";

export default function HeaderComp() {
  return (
    <header className="header">
      <MyHead />
      <div className="container">
        {/* Logo must send to index so do not change [/=index] */}
        <Link href="/" className="header-logo">
          <img src="/m-darkBlue.png" alt="MLOGO" />
        </Link>
        <div id="header-buttons" className="header-buttons">
          <Link href="/about" className="header-button">
            About
          </Link>
          <Link href="/resume" className="header-button">
            Resume
          </Link>
          <Link href="/things" className="header-button">
            Things
          </Link>
        </div>
        <SidebarComp />
      </div>
    </header>
  );
}
