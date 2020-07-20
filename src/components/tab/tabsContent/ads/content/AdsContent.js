import React from 'react';
import './adsContent.css'
import {useState} from 'react';
import OrderDropDown from "./orderDropDown/OrderDropDown";
import TimeDropDown from "./timeDropDown/TimeDropDown";
import CategoryDropDown from "./categoryDropDown/CategoryDropDown";
import AdsGrid from "./grid/AdsGrid";
import Pagination from '../content/pagination/Paginationc'
const AdsContent = () => {

    return (
        <div className="adsContent">
            <div className="adsSection1">
                <OrderDropDown/>
                <TimeDropDown/>
                <CategoryDropDown/>
            </div>
            <AdsGrid/>
            <Pagination/>
        </div>
    );
};

export default AdsContent;
