import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div className="app">
      {/* 
        we want header to be at every page hence we will keep it here at the top
        we can also keep it in each route but , keepting it at top is better.

        Also the base route is always kept at the bottom of all routes
      */ }
      <Header />
      <Switch>
      <Route path="/checkout">
          
          <Checkout/>

        </Route>
        <Route path="/">
          
          <Home />
        </Route>
        

        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
