import "./App.scss";

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AddPlayerPage from "./pages/AddPlayerPage";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";
import AboutPage from "./pages/AboutPage";
import Game from "./components/Game/Game";
import Footer from "./components/Footer/Footer";

function App (){
    const [ playerName, setPlayerName ] = useState('');
    const [ id, setId ] = useState('');
  
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
}

export default App;
