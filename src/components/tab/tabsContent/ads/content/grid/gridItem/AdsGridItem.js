import React from 'react';
import img from '../../../../../../../images/ps4.jpg'
import './adsGridItem.css'

const AdsGridItem = () => {
    return (
        <div className="gridItem">
            <img className="itemImage" src={img}/>
            <p className={"alignRight gridItemText"}>گیفت کارت</p>
            <p className={"alignRight gridItemText"}>250.000</p>
            <p className={"alignRight gridItemText"}>تهران نازی آباد</p>
            <div className="horizontalLineGreen"/>
        </div>
    );
};

export default AdsGridItem;
