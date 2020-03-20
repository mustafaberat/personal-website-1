import Link from 'next/link'

export default function HeaderComp({ text, path = "/" }) {
    return (
        <header className="header">
            <div className="container">
                {/* Logo must send to index so do not change [/=index] */}
                <Link href="/">
                    <a className="header-logo">
                        <img src="/m-darkBlue.png" alt="MLOGO"></img>
                    </a>
                </Link>
                <div className="header-buttons">
                    <Link href={path}>
                        <a className="header-button-aboutMe header-button">{text}</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}