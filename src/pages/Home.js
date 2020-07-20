import React from 'react';
import Navbarc from "../components/navbar/Navbarc";
import Carouselc from "../components/carousel/Carouselc";
import Tabs from "../components/tab/Tabs";
import Footer from "../components/footer/Footer";


const Home = () => {
    return (
        <div>
           <Navbarc/>
            <Carouselc/>
            <Tabs/>
            <Footer/>
        </div>
    );
};

export default Home;
