import React from 'react';
import logo from './logo.svg';

import Navbarc from "./components/navbar/Navbarc";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";

function App() {
    return (
        <Router>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/contactUs' component={ContactUs}/>
                <Route exact path='/aboutUs' component={AboutUs}/>
                <Route exact path='/support' component={Support}/>
                <Route exact path='/faq' component={FAQ}/>
            </Switch>
        </Router>
    );
}

export default App;
