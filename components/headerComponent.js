import Link from 'next/link'
import MyHead from './MyHead'

export default function HeaderComp({ text, path = "/" }) {
    return (
        <header className="header">
            <MyHead />
            <div className="container">
                {/* Logo must send to index so do not change [/=index] */}
                <Link href="/">
                    <a className="header-logo">
                        {/* <img src="/m-logo.png" alt="MLOGO"></img> */}
                        <img src="/m-darkBlue.png" alt="MLOGO"></img>

                    </a>
                </Link>
                <div className="header-buttons">
                    <Link href={path}>
                        <a className="header-button">{text}</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}