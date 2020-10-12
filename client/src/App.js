import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Footer from './components/footer';
import TitleHeader from './components/titleHeader';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
      <Header/>
      <TitleHeader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;