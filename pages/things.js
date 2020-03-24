import React from 'react';

import HeaderComp from '../components/headerComponent'
import Things from '../components/ThingsComp'

const things = () => {
    return (
        <div>
            <HeaderComp text='About Me' path='/aboutMe' />
            <Things />
        </div>
    );
}

export default things
