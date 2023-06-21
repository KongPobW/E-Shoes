import React from 'react';
import '../../App.css';
import { popularProducts } from '../../data';
import Category from '../Category';
import PDS from '../PDS';
import Slider from '../Slider';

function Home() {
    return (
        <>
            <Slider />
            <Category />
            <PDS products={popularProducts} />
        </>
    );
}

export default Home;
