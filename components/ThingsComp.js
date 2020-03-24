import React from 'react';

import ThingsCard from '../components/ThingsCardComp'

const Things = () => {
    return (
        <div className="container">
            <h1 className="name-surname">Things</h1>
            <div className="things">
                <ThingsCard text='button' path='#' />
                <ThingsCard text='button' path='#' />
                <ThingsCard text='button' path='#' />
                <ThingsCard text='button' path='#' />
                <ThingsCard text='button' path='#' />
            </div>
        </div>
    );
}

export default Things