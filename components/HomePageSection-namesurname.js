import React from 'react';

import SocialMedia from '../components/SocialMedia'

const HomePageSection = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
                <p className="my-title">Software Engineering Student</p>
                <SocialMedia />
            </div>
        </section>
    );
}

export default HomePageSection