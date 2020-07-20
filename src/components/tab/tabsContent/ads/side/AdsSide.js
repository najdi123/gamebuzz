import React from 'react';
import './adsSide.css'
import CategoryItem from "./category/item/CategoryItem";
import LastItem from "./category/lastItem/LastItem";
import ItemWithSubCategory from "./category/itemWithSubCategory/ItemWithSubCategory";
import ForumTopic from "./forumTopic/ForumTopic";
import ImgAds from "./imgads/ImgAds";

const AdsSide = () => {
    return (
        <div className="adsSide">
            <p className="registerAds">ثبت آگهی (رایگان)</p>
            <div className='adsSideSection'>
                <CategoryItem content={"پلی استیشن"}/>
                <CategoryItem content={"ایکس باکس"}/>
                <LastItem content={"نینتندو"}/>
            </div>
            <div className='adsSideSection'>
                <CategoryItem  content={"کامپیوتر بازی"}/>
                <CategoryItem  content={"گجت"}/>
                <LastItem  content={"گیفت کارت"}/>
            </div>
            <div className='adsSideSection'>
                <p className='adsFilter'>فیلتر آگهی</p>
                <div><ItemWithSubCategory content={"محل"}/></div>
                <CategoryItem  content={"قیمت"}/>
                <LastItem  content={"بیشتر"}/>
            </div>
            <p className='adsFilter'>آخرین تاپیک فروم</p>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ForumTopic  content={"دلیل اجرا نشدن بازی کال آف روی ایکس باکس های قدیمی؟"}/>
            <ImgAds/>
            <ImgAds/>
            <ImgAds/>
        </div>
    );
};

export default AdsSide;
