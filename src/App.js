import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import TravelCard from './components/TravelCard/TravelCard';

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/travel">
            <TravelCard />
          </Route>
          <Route>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
