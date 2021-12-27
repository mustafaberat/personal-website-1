import React from 'react';

import SocialMedia from '../components/SocialMedia'

var _2016 = "I started the English preparatory class in 2016 and that year, I chased a lot of tourists to practice on the street. Some of them tried to escape from my slow talk but I got better day by day.";
var _2017 = "The first year of my department was like a dream because I saw a lot of code and it was great. I found a part-time job on web applications at my school. Then I learned that I love taking lessons and also working in a company at the same time. At the end of the year, I decided to do an internship without any idea about field work, but I thought I had done everything enough. The idea of getting my first internship was a great decision because I had the chance to observe what I had not yet learned.";
var _2018 = "The second year of my department, I was knowing much more than my classmates because i have already learned HTML,CSS and JS with real project experience. In that year, i realize that i have learned lots of subjects such as object oriented programming pillars and the logic of pointers and much more. Additionally, I took my second part-time job and on Sunday became a software teacher for high school students. At the end of the year I decided to take a crazy step about my career that I will go to TUBITAK BILGEM for internship program. It was impossible to apply because i was 2nd year of the department and normally they would not accept it but they did. After getting there, i asked human resources manager, why did you accept me? She said i have been following you from the Linkedin for along time. I think I'm still surprised about it."
var _2019 = "In the third year, I decided to take more lessons from the upper class to gain free time in the 4th grade. I quit my first part-time job because I took everything I could get from it, but I focused on being an instructor and gave many lessons to the children. As an intern at the end of the year I found an enormous defense company to serve my flag. After my internship, they give me the chance to continue in this company.";
var _2020 = "After an excellent 9 months, I got job offers from several companies before my graduation. I accepted the most reasonable offer where I could both improve myself in terms of technology, culture and mission and leave my comfort zone. After the process, I decided to set sail for new horizons at Trendyol, Turkey's largest e-commerce site."

const AboutPageSection = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="name-surname">About Me</h1>
                <p className="my-title about-my-title">Hi! I am <span className="about-spans">Mustafa Berat ARU</span></p>
                <p className="my-title about-my-title">{_2016}</p>
                <p className="my-title about-my-title">{_2017}</p>
                <p className="my-title about-my-title">{_2018}</p>
                <p className="my-title about-my-title">{_2019}</p>
                <p className="my-title about-my-title">{_2020}</p>

                <SocialMedia />
            </div>
        </section>
    );
}

export default AboutPageSection
