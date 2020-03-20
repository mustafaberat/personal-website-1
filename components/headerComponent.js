import Link from 'next/link'

const MY_URL = 'http://mustafaberat.now.sh/'

export default function HeaderComp({ text, path }) {
    return (
        <header className="header">
            <div className="container">
                <a className="header-logo" href={MY_URL}>
                    <img src="/m-darkBlue.png" alt="MLOGO"></img>
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