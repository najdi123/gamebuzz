import './tabs.css'
import tabs from "./tabData";
import TabItem from "./tabItem/TabItem";
import React, {useState} from 'react';
import Ads from "./tabsContent/ads/Ads";
import Tournament from "./tabsContent/tournament/tournament";
import MediaAndNews from "./tabsContent/mediaAndNews/MediaAndNews";
import Forum from "./tabsContent/forum/Forum";

const Tabs = () => {
    const [tab, setTab] = useState({
        '1': false,
        '2': false,
        '3': true,
        '4': false
    })

    const [active, setActive] = useState("3");

    const handleClick = (id) => {
        setActive(id)
        console.log(active)
        if (id === "1") {
            setTab({ '1': true, '2': false, '3': false, '4': false})
        } else if (id === "2") {
            setTab({ '1': false, '2':true , '3': false, '4': false})
        } else if (id === "3") {
            setTab({ '1': false, '2':false , '3': true, '4': false})
        } else if (id === "4") {
            setTab({ '1': false, '2':false , '3': false, '4': true})
        }
    };


    return (
        <div className="tabWrapper">
            <p className='pageTitle'>گیمز باز/<span>صفحه اصلی</span></p>
            <div className='tabs'>
                {
                    tabs.Items.map(
                        item =>
                            <div className="tabItemWrapper"
                                 onClick={() => handleClick(item.id)}>
                                <div className='tabItemIconHolder'>
                                    <img className={active == item.id ? 'tabItemIcon large' : 'tabItemIcon small' }
                                         src={active == item.id ? require(`../../images/${item.iconOn}.png`) : require(`../../images/${item.iconOff}.png`)}/>
                                </div>
                                <p className={active == item.id ? "green-text" : ""}>{item.name}</p>
                            </div>

                    )
                }
            </div>
            <div className="horizontalLine"/>
            {(tab[1] === true) ? <Forum/> : null}
            {(tab[2] === true) ? <MediaAndNews/> : null}
            {(tab[3] === true) ?  <Ads/>: null}
            {(tab[4] === true) ?  <Tournament/>: null}
        </div>
    );
};

export default Tabs;
