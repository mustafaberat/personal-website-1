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
                    <Link href="/#">
                        <a className="header-button-projects header-button">Projects</a>
                    </Link>
                </div>
                <button className="header-more-icon" type="button" id="header-more-icon">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    )
}