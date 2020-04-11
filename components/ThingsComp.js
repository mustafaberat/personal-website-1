import React from 'react';

import ThingsCard from '../components/ThingsCardComp'
import MyHead from '../components/MyHead'
const Things = () => {
    return (
        <div className="container">
            <MyHead />
            <h1 className="name-surname">Things</h1>
            <div className="things">
                <ThingsCard
                    text='Covid19'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/covid19-website/master/src/screenshot.PNG'
                    path='https://coronavirus-covid19.now.sh/' />
                <ThingsCard
                    text='Binarygap JS'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/binarygap-js/master/src/assets/screenshot.PNG'
                    path='https://github.com/mustafaberat/binarygap-js' />
                <ThingsCard
                    text='Minesweeper'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/MayinTarlasi-Game-by-Vue/master/src/output/screenshot.PNG'
                    path='https://mayin-tarlasi.now.sh/' />
                <ThingsCard
                    text='Flappy Bee'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/Flappy-bee/master/public/VizvizGame.png'
                    path='https://vizviz.now.sh/' />
                <ThingsCard
                    text='XOX Game'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/XOX-Game-by-Vue/master/src/img/Screenshot.PNG'
                    path='https://xox.now.sh/' />
                <ThingsCard
                    text='Personal Website'
                    imageSource='img/output.PNG'
                    path='/' />
                <ThingsCard
                    text='Piano'
                    imageSource='https://raw.githubusercontent.com/mustafaberat/piano/master/public/screenshot.PNG'
                    path='https://piano-beta.now.sh/' />
                <div style={{ marginBottom: "30px" }}></div>
            </div>
        </div>
    );
}

export default Things