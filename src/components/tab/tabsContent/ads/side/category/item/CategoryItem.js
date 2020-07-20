import React, {useState} from 'react';
import './categoryItem.css'
import arrow from '../../../../../../../images/Arrow.png'

const CategoryItem = (props) => {

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
                    <p>some items</p>
                    <p>some items</p>
            </div>
            <div className='horizontalLine'/>
        </div>
    );
};

export default CategoryItem;
