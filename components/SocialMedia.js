import React from 'react';
import Link from 'next/link'
const SocialMedia = () => {
    return (
        <article className="social-media-links about-social-media-area">
            <div className="df">
                <Link href="https://www.instagram.com/mustafaberatt/" prefetch={false}>
                    <a className="social-media-instagram social-media-common" target="blank">
                        <i className="fab fa-instagram"></i>
                    </a></Link>
                <Link href="https://github.com/mustafaberat/" prefetch={false}>
                    <a className="social-media-github social-media-common" target="blank">
                        <i className="fab fa-github-alt"></i>
                    </a></Link>
                <Link href="https://www.facebook.com/mustafaberatt" prefetch={false}>
                    <a className="social-media-facebook social-media-common" target="blank">
                        <i className="fab fa-facebook-f"></i>
                    </a></Link>
            </div>
            <div className="df">
                <Link href="https://codepen.io/mustafaberatt" prefetch={false}>
                    <a className="social-media-codepen social-media-common" target="blank">
                        <i className="fab fa-codepen"></i>
                    </a></Link>
                <Link href="https://www.linkedin.com/in/mustafaberatt/" prefetch={false}>
                    <a className="social-media-linkedin social-media-common" target="blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a></Link>
                <Link href="https://medium.com/@mustafaberat" prefetch={false}>
                    <a className="social-media-medium social-media-common" target="blank">
                        <i className="fab fa-medium-m"></i>
                    </a></Link>
            </div>
        </article>
    );
}

export default SocialMedia