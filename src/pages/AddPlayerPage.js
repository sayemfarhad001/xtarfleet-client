import PlayerForm from '../components/PlayerForm/PlayerForm'
import React, { Component } from 'react'
import axios from 'axios'
import API from "../components/API/API";
import Game from "../components/Game/Game"
import { Routes,Switch, Route, BrowserRouter } from 'react-router-dom';
// import classNames from "classnames";

export default class AddPlayerPage extends Component {
    state = {
        submitted: false,
        // updated: false,

        // playerName: "",
        // displayModal: false,
    }    

    submitHandler = (formData) => {
        // this.setState({ playerName: formData.playerName })
        this.props.setPlayerName(formData.playerName)
        
        // console.log(this.props.id)
        axios.post(`${API.server}/${API.players}`, formData)
        .then((response) => {
            this.setState({submitted: true})
            // this.setState({posted: true})
            this.props.setId(response.data.id)
        
            // this.props.history.push(`/xtarfleet`) 
            // console.log(response.data.id)
            // this.props.setId(formData.id) 
        })    
        .catch((err) => {
            console.log(err)
        })

        // if (!this.state.posted)
        // axios.get(`${API.server}/${API.players}`)            
        //     .then((response) => {
        //         let n = response.data.length - 1;
        //         console.log(response.data[n]);
        //         return this.setState({posted: false})
        //         // this.props.setState({
        //         //     players: response.data,
        //         // });
        //     })
        //     .catch((err) => console.log("error!", err));


    }

    clickHandler = () => {
        this.props.history.push(`/${API.players}`)
    }

    routeClickHandler = () => {
        this.props.history.goBack()
    }

    render() {
        if(!this.state.submitted){
            return (
                <div>            
                {console.log(this.props)}
                {/* <BrowserRouter>
                <Route exact 
                path="/newplayer" 
                render={ (props) => 
                    <PlayerForm 
                        title="Add New Player"
                        handleSubmit={this.submitHandler} 
                        button="+ Add Player" 
                        handleClick={this.clickHandler}
                        backClick = {this.routeClickHandler}
                        // route="/player"
                        playerName={this.props.playerName}
                    
                        // playerName={playerName}
                        // setPlayerName={setPlayerName} 
                        // id={id} 
                        // setId={setId}
                        
                        match={props.match} 
                    />
                }
                />
                </BrowserRouter> */}


                <PlayerForm
                    title="Add New Player"
                    handleSubmit={this.submitHandler} 
                    button="+ Add Player" 
                    handleClick={this.clickHandler}
                    backClick = {this.routeClickHandler}
                    // route="/player"
                    playerName={this.props.playerName}
                    id={this.props.id}
                    setId={this.props.setId}
                    // toggleModal={toggleModal}
                />


                {/* <Game playerName={this.props.playerName} modalClass={modalClass}/> */}
                {/* <BrowserRouter>
                    <Route exact path="/xtarfleet" 
                    // render={(props) => <GameplayerName={this.props.playerName} modalClass={modalClass} />} 
                    component={<Game/>}
                    />
                </BrowserRouter> */}
                </div>        
            )
        } else {
            return(
                <Game 
                    playerName={this.props.playerName} 
                    id={this.props.id} 
                    setId={this.props.setId} 
                    // state={this.state.updated}
                    // updated={this.setState}
                /> 


                // <BrowserRouter>
                    // <Route exact path="/xtarfleet" 
                        // render={(props) => <Game playerName={this.props.playerName} match={props.match}  />} 
                        // component={<Game />}
                    // />
                // </BrowserRouter>
            )
        }

    }
}