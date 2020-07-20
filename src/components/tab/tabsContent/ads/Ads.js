import React from 'react';
import './ads.css'
import AdsContent from "./content/AdsContent";
import AdsSide from "./side/AdsSide";
import Footer from "../../../footer/Footer";

const Ads = () => {
    return (
        <div className="adsWrapper">
            <AdsContent/>
            <AdsSide/>
        </div>
    );
};

export default Ads;
