import React, {useState} from 'react';
import './tabItem.css'
import {setStore, getStore} from "trim-redux"

const TabItem = ({item, onSomeEvent}) => {

    const [active, setActive] = useState(false);
    const [activeID, setActiveID] = useState(3);

    const [activeTab, setActiveTab] = useState({
        '1': true,
        '2': false,
        '3': false,
        '4': false
    });

    const handleClick = (id) => {
        setStore({id: id});
        onSomeEvent(id);
        console.log(id)
    };

    return (
        <div className={`tabItemWrapper ${activeTab["1"] ? "activeTab" : ""}`}
             onClick={() => handleClick(item.id)}>
            <div className='tabItemIconHolder'>
                <img className='tabItemIcon'
                     src={active ? require(`../../../images/${item.iconOn}.png`) : require(`../../../images/${item.iconOff}.png`)}/>
            </div>
            <p>{item.name}</p>
        </div>
    );
};

export default TabItem;
