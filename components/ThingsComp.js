import React from 'react';

import ThingsCard from '../components/ThingsCardComp'
const Things = () => {
    return (
        <div className="container">
            <h1 className="name-surname">Things</h1>
            <div className="things">
                <ThingsCard text='Personal Website' imageSource='img/output.PNG' path='/' />
                <ThingsCard text='XOX Game' imageSource='img/xox-game-output.png' path='https://xox.now.sh/' />
                {/* <ThingsCard text='DIV BUTTON' imageSource='img/output.png' path='#' /> */}
                {/* <ThingsCard text='DIV BUTTON' imageSource='m-darkBlue.png' path='#' /> */}
                {/* <ThingsCard text='DIV BUTTON' imageSource='m-blue.png' path='#' /> */}
            </div>
        </div>
    );
}

export default Things