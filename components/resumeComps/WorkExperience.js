import React from 'react';

const WorkExperience = () => {
    return (
        <div className="container">
            <section className="workexperience-container">
                <h1 className="workexperience-title">Work Experience</h1>
                <h3 className="work-title">Instructor</h3>
                <div className="work-subtitles">
                    <h3 className="work-companay">Turkish Technology Team</h3>
                    <div className="work-dateandlocation">
                        <h3 className="work-date">06/02/19 - 08/06/20</h3>
                        <h3 className="work-location">Istanbul (Turkey)</h3>
                    </div>
                </div>
                <p className="work-details">
                    Every Sunday, i give some lessons in which every education takes 4 months. Energy Technology, Internet of Things, Artificial Intelligence, Mobile Application and Programming
                </p>
            </section>

            <section className="workexperience-container">
                <h3 className="work-title">Full Stack & React Native Developer (Intern)</h3>
                <div className="work-subtitles">
                    <h3 className="work-companay">TUBITAK BILGEM Software Technologies Research Institute</h3>
                    <div className="work-dateandlocation">
                        <h3 className="work-date">17/06/19 - 09/08/19</h3>
                        <h3 className="work-location">Ankara (Turkey)</h3>
                    </div>
                </div>
                <p className="work-details">
                    Facebook login and registration pages as hybrid; a react native application that is compatible with both
                    mobile and web pages has been developed, also I was able to develop an application that
                    dynamically requested official websites, returned the result code of these sites, and stored them in the
                    database.
                </p>
                <p className="work-details">
                    <ul>
                        <li>Back end & Testing: Java - Spring Framework</li>
                        <li>Front end: JavaScript - React - React Native</li>
                        <li>Database: PostgreSQL - DBeaver - Postman</li>
                    </ul>
                </p>
            </section>

            <section className="workexperience-container">
                <h3 className="work-title">Responsible for the Official Website of the Institution</h3>
                <div className="work-subtitles">
                    <h3 className="work-companay">IZU Career Center</h3>
                    <div className="work-dateandlocation">
                        <h3 className="work-date">10/09/17 - 07/06/19</h3>
                        <h3 className="work-location">Istanbul (Turkey)</h3>
                    </div>
                </div>
                <p className="work-details">
                    As a part time work, my mission is to update the changes on the official website of the institution
                </p>
            </section>

            <section className="workexperience-container">
                <h3 className="work-title">Frontend Developer (Intern)</h3>
                <div className="work-subtitles">
                    <h3 className="work-companay">Inlab Smart Technologies</h3>
                    <div className="work-dateandlocation">
                        <h3 className="work-date">20/08/18 - 16/09/18</h3>
                        <h3 className="work-location">Istanbul (Turkey)</h3>
                    </div>
                </div>
                <p className="work-details">
                    Completed my first internship as an intern responsible for converting the design websites to codes with using HTML and CSS.
                </p>
            </section>

        </div>
    );
}

export default WorkExperience