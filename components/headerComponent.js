import Link from 'next/link'
export default function HeaderComp({ text, path }) {
    return (
        <header className="header">
            <div className="container">
                <a className="header-logo" href="#">
                    <img src="/m.png" alt="MLOGO"></img>
                </a>
                <div className="header-buttons">
                    <Link href={path}>
                        <a className="header-button-aboutMe header-button">{text}</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}