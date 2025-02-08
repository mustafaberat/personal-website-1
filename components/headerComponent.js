import Link from "next/link";
import MyHead from "./MyHead";
import SidebarComp from "./SidebarComp";
import Image from 'next/image'

export default function HeaderComp() {
  return (
    <header className="header">
      <MyHead />
      <div className="container">
        {/* Logo must send to index so do not change [/=index] */}
        <Link href="/" className="header-logo">
          <Image
            src="/m-darkBlue.png"
            alt="MLOGO"
            layout="intrinsic"
            width={40}
            height={40}
          />
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
