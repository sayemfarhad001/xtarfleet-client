import "./App.scss";

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./components/Game/Game";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AddPlayerPage from "./pages/AddPlayerPage";
// import PlayerForm from "./components/PlayerForm/PlayerForm";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App (){
  // state = {
  //   playerName: "",
  //   id: ""
  // }
    const [ playerName, setPlayerName ] = useState('');
    const [ id, setId ] = useState('');
  // collectPlayer(data){
  //   this.setState({playerName: data})
  // }

  // render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact 
              path="/newplayer" 
              render={ (props) => 
                <AddPlayerPage 
                  playerName={playerName}
                  setPlayerName={setPlayerName} 
                  id={id} 
                  setId={setId}
                  {...props} 
                />
              }
            >
              
            </Route>
            <Route exact 
                path="/xtarfleet" 
                render={ (props) => 
                  <Game 
                    playerName={playerName} 
                    id={id} 
                    {...props} 
                  />
                } 
              />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/players" component={Leaderboard} />
            <Route
              path="/players/:id"
              render={(props) => <PlayerDetails {...props} />}
            />
          </Switch>
          <Footer/>
        </BrowserRouter>
        
      </div>
    );
  // }
}

export default App;
