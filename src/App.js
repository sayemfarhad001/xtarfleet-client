import "./App.scss";

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./components/Game/Game";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import PlayerForm from "./components/PlayerForm/PlayerForm";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/xtarfleet" component={Game} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/newplayer" component={PlayerForm} />
            <Route exact path="/players" component={Leaderboard} />
            <Route
              path="/players/:id"
              render={(props) => <PlayerDetails match={props.match} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
