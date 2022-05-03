import "./App.scss";

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./components/Game/Game";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AddPlayerPage from "./pages/AddPlayerPage";
// import PlayerForm from "./components/PlayerForm/PlayerForm";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";

class App extends Component {
  state = {
    playerName: "",
    id: ""
  }

  collectPlayer(data){
    this.setState({playerName: data})
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/xtarfleet" render={(props) => <Game playerName={this.state.playerName} id={this.state.id} match={props.match} />} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/newplayer" 
            component={AddPlayerPage} 
            // render={(props) => <AddPlayerPage playerName={this.state.playerName} id={this.state.id} collectPlayer={this.collectPlayer} match={props.match} />}
            />
{/* 
            <Route exact path="/xtarfleet" 
                // render={(props) => <GameplayerName={this.props.playerName} modalClass={modalClass} />} 
                component={<Game/>}
                /> */}

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
