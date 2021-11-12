import React from "react";
import ReactDOM from "react-dom";
import Admin from "./pages/Admin";
import Home from "./Home";
import './assets/styles/global.scss';
import {   BrowserRouter as Router, Switch, Route  } from 'react-router-dom';


ReactDOM.render(


<Router>


<Switch>
  <Route path="/"><Home /></Route>
  <Route path="/admin" component={Admin}/>
</Switch>
</Router>,
    document.getElementById("root")
);