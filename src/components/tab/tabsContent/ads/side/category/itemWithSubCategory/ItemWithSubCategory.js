import React, {useState} from 'react';
import arrow from "../../../../../../../images/Arrow.png";
import './itemWithSubCategory.css'
import CategoryItem from "../item/CategoryItem";
import LastItem from "../lastItem/LastItem";

const ItemWithSubCategory = (props) => {

    const [expBox, setExpBox] = useState(false);

    const onCategoryClick = () => {
        setExpBox(!expBox);
    };

    return (
        <div className='categoryItem'>
            <div className='categoryItemSection1'>
                <div className='flexItem'><img onClick={onCategoryClick} src={arrow}/></div>
                <p className='flexItem'>{props.content}</p>
            </div>
            <div className={`expandableBox ${expBox ? "expandedBox" : "collapsedBox"}`}>
                <LastItem   content={"استان"}/>
                <LastItem   content={"شهر"}/>
            </div>
            <div className='horizontalLine'/>
        </div>
    );
};

export default ItemWithSubCategory;
