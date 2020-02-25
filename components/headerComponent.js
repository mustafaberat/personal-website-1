import Link from 'next/link'
export default function HeaderComp() {
    return (
        <header className="header">
            <div className="container">
                <a className="header-logo" href="#">
                    <img src="/m.png" alt="MLOGO"></img>
                </a>
                <div className="header-buttons">
                    <Link href="/aboutMe">
                        <a className="header-button-aboutMe header-button">About Me</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}