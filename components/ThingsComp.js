import React from 'react';

import ThingsCard from '../components/ThingsCardComp'
import MyHead from '../components/MyHead'
const Things = () => {
    return (
        <div className="container">
            <MyHead />
            <h1 className="name-surname">Things</h1>
            <div className="things">
                <ThingsCard text='XOX Game' imageSource='img/xox-game-output.png' path='https://xox.now.sh/' />
                <ThingsCard text='Personal Website' imageSource='img/output.PNG' path='/' />
                <ThingsCard text='Minesweeper' imageSource='img/minesweeper-game-output.PNG' path='https://mayin-tarlasi.now.sh/' />
                <ThingsCard text='Piano' imageSource='img/piano.PNG' path='https://piano-beta.now.sh/' />
                {/* <ThingsCard text='DIV BUTTON' imageSource='img/output.png' path='#' /> */}
                {/* <ThingsCard text='DIV BUTTON' imageSource='m-darkBlue.png' path='#' /> */}
                {/* <ThingsCard text='DIV BUTTON' imageSource='m-blue.png' path='#' /> */}
                <div style={{ marginBottom: "30px" }}></div>
            </div>
        </div>
    );
}

export default Things