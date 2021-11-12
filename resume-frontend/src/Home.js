import React from 'react';
import Header from './components/layouts/header.js';
import Footer from './components/layouts/footer.js';
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function Home(props) {
    return (
        <div className="page-container">
            <Header/>
            <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/portfolio" component={Portfolio}></Route>
                <Route path="/contact" component={Contact} ></Route>

            </Switch>
            <Footer/>
        </div>
    )
}

export default Home
