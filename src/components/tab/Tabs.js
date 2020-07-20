import './tabs.css'
import tabs from "./tabData";
import TabItem from "./tabItem/TabItem";
import React, {useState} from 'react';
import Ads from "./tabsContent/ads/Ads";
import Tournament from "./tabsContent/tournament/tournament";
import MediaAndNews from "./tabsContent/mediaAndNews/MediaAndNews";
import Forum from "./tabsContent/forum/Forum";

const Tabs = () => {

    const onSomeEvent = (id) => {
        if (id === "1") {
            setShowForum(true)
            setShowAds(false)
            setShowMediaAndNews(false)
            setShowTournament(false)
        } else if (id === "2") {
            setShowMediaAndNews(true)
            setShowTournament(false)
            setShowAds(false)
            setShowForum(false)
        } else if (id === "3") {
            setShowAds(true)
            setShowMediaAndNews(false)
            setShowTournament(false)
            setShowForum(false)
        } else if (id === "4") {
            setShowTournament(true)
            setShowMediaAndNews(false)
            setShowAds(false)
            setShowForum(false)
        }
    };

    const [showAds, setShowAds] = useState(false);
    const [showTournament, setShowTournament] = useState(false);
    const [showForum, setShowForum] = useState(true);
    const [showMediaAndNews, setShowMediaAndNews] = useState(false);

    return (
        <div className="tabWrapper">
            <p className='pageTitle'>گیمز باز/<span>صفحه اصلی</span></p>
            <div className='tabs'>
                {tabs.Items.map(item => <TabItem key={item.id} item={item} onSomeEvent={onSomeEvent}/>)}
            </div>
            <div className="horizontalLine"/>
            {(showAds === true) ? <Ads/> : null}
            {(showTournament === true) ? <Tournament/> : null}
            {(showForum === true) ? <Forum/> : null}
            {(showMediaAndNews === true) ? <MediaAndNews/> : null}
        </div>
    );
};

export default Tabs;
