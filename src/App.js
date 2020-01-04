import React from 'react';
import './App.css';
import Navigation from './html/components/navigation';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './html/pages/home';
import TravelPage from './html/pages/travel';
import LandscapePage from './html/pages/landscape';
import PortraitPage from './html/pages/portrait';


function App() {
  const navscroll = ["travel", "landscape", "portrait"];

  return (
    <div className="App" >
      <Router>
        <Navigation bg="dark" navscroll={navscroll} />
        <Route exact path="/" component={Home} />
        <Route path={"/" + navscroll[0]} component={TravelPage} />
        <Route path={"/" + navscroll[1]} component={LandscapePage} />
        <Route path={"/" + navscroll[2]} component={PortraitPage} />
  </Router>
    </div>
  );
}


export default App;
