import React, {useState, useEffect} from 'react';
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
    const TabClicked = id => {
        if (id === 2) {
            setActiveTab({
                1: false,
                2: true,
                3: false,
                4: false
            })
        } else if (id === 3) {
            setActiveTab({
                1: false,
                2: false,
                3: true,
                4: false
            })
        } else if (id === 4) {
            setActiveTab({
                1: false,
                2: false,
                3: false,
                4: true
            })
        } else {
            setActiveTab({
                1: true,
                2: false,
                3: false,
                4: false
            })
        }

    }


    const handleClick = (id) => {
        setStore({id: id});
        onSomeEvent(id);
        console.log(id)
        if (id === '1') {
            setActiveTab({
                '1': true,
                '2': false,
                '3': false,
                '4': false
            }, () => { console.log('im first')} )
        } else if (id === '2') {
            setActiveTab({
                '1': false,
                '2': true,
                '3': false,
                '4': false
            }, () => { console.log('im sec')} )
        } else if (id === '3') {
            setActiveTab({
                '1': false,
                '2': false,
                '3': true,
                '4': false
            },() => { console.log('im third')})
        } else if (id === '4') {
            setActiveTab({
                '1': false,
                '2': false,
                '3': false,
                '4': true
            },() => { console.log('im forth')})
        }
        console.log(activeTab)
    };

    useEffect((item)=>{
        const Item3 = (
            <div className={activeTab[item.id] ? "activeTab tabItemWrapper" : "tabItemWrapper"}
             onClick={() => handleClick(item.id)}>
            <div className='tabItemIconHolder'>
                <img className='tabItemIcon'
                     src={active ? require(`../../../images/${item.iconOn}.png`) : require(`../../../images/${item.iconOff}.png`)}/>
            </div>
            <p>{item.name}</p>
        </div>
        )
        return (Item3)
    },[activeTab])

    return (
        <div>
            {Item3}
        </div>
    );
};

export default TabItem;
