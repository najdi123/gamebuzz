import React from 'react';
import './adsGrid.css'
import grid from "./adsGridData";
import AdsGridItem from "./gridItem/AdsGridItem";

const AdsGrid = () => {
    return (
        <div className="adsGridHolder">
            {grid.Items.map(item => <AdsGridItem key={item.id} item={item}/>)}
        </div>
    );
};

export default AdsGrid;
