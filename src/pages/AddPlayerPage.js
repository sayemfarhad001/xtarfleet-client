import PlayerForm from '../components/PlayerForm/PlayerForm'
import React, { Component } from 'react'
import axios from 'axios'
import API from "../components/API/API";
import Game from "../components/Game/Game"
import { Routes,Switch, Route, BrowserRouter } from 'react-router-dom';
import classNames from "classnames";

export default class AddPlayerPage extends Component {
// state = {
//     playerName: "",
//     displayModal: false,
// }    


submitHandler = (formData) => {
    // this.setState({ playerName: formData.playerName })
    this.props.setPlayerName(formData.playerName)
    axios.post(`${API.server}/${API.players}`, formData)
    .then(() => {
        this.props.history.push(`/xtarfleet`)  
    })    
    .catch((err) => {
        console.log(err)
    })
}
clickHandler = () => {
    this.props.history.push(`/${API.players}`)
}
routeClickHandler = () => {
    this.props.history.goBack()
}
    render() {
    //     const classes = {
    //         modal: "game__modal",
    //         hidden: "hidden",
    //         display: "display",
    //       };
      
    //       let modalClass = classNames(classes.modal, classes.hidden);
      
    //       //Toggle modal on click function
    //       const toggleModal = () => {
    //         if (this.state.displayModal) {
    //           this.setState({ displayModal: false });
    //           return;
    //         }
    //         this.setState({ displayModal: true });
    //       };
    //           //if statement to check for modal on re-render
    // if (this.state.displayModal) {
    //     modalClass = classNames(classes.modal, classes.display);
    //   }





return (
<div>            {console.log(this.props)}
            
            <PlayerForm
                title="Add New Player"
                handleSubmit={this.submitHandler} 
                button="+ Add Player" 
                handleClick={this.clickHandler}
                backClick = {this.routeClickHandler}
                // route="/player"
                playerName={this.props.playerName}
                // toggleModal={toggleModal}
            />
            {/* <Game playerName={this.props.playerName} modalClass={modalClass}/> */}
            {/* <BrowserRouter>
                <Route exact path="/xtarfleet" 
                // render={(props) => <GameplayerName={this.props.playerName} modalClass={modalClass} />} 
                component={<Game/>}
                />
            </BrowserRouter> */}
</div>        )
    }
}