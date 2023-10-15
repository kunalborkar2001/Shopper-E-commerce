import React from 'react';
import Hero from '../Components/Hero/hero';
import Popular from '../Components/Poplular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;
