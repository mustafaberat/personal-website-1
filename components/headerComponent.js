import Link from 'next/link'
import MyHead from './MyHead'
import SidebarComp from './SidebarComp'

export default function HeaderComp() {
    return (
        <header className="header">
            <MyHead />
            <div className="container">
                {/* Logo must send to index so do not change [/=index] */}
                <Link href="/">
                    <a className="header-logo">
                        <img src="/m-darkBlue.png" alt="MLOGO"></img>
                    </a>
                </Link>
                <div id="header-buttons" className="header-buttons">
                    <Link href="/about">
                        <a className="header-button">About</a>
                    </Link>
                    <Link href="/resume">
                        <a className="header-button">Resume</a>
                    </Link>
                    <Link href="/things">
                        <a className="header-button">Things</a>
                    </Link>
                </div>
                <SidebarComp />
            </div>
        </header>
    )
}