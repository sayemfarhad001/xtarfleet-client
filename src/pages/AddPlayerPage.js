import PlayerForm from '../components/PlayerForm/PlayerForm'
import React, { Component } from 'react'
import axios from 'axios'
import API from "../components/API/API";
import Game from "../components/Game/Game"

export default class AddPlayerPage extends Component {
    state = {
        submitted: false,
    }    

    submitHandler = (formData) => {
        this.props.setPlayerName(formData.playerName)
        
        axios.post(`${API.server}/${API.players}`, formData)
        .then((response) => {
            this.setState({submitted: true})
            this.props.setId(response.data.id) 
        })    
        .catch((err) => {
            console.log(err)
        })
        // AUDIO PLAYING FUNCTION
        let wow = document.querySelector('#aaud');
        wow.play();
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
                    <PlayerForm
                        title="Add New Player"
                        handleSubmit={this.submitHandler} 
                        button="+ Add Player" 
                        handleClick={this.clickHandler}
                        backClick = {this.routeClickHandler}
                        playerName={this.props.playerName}
                        id={this.props.id}
                        setId={this.props.setId}
                    />
                </div>        
            )
        } else {
            return(
                <Game 
                    playerName={this.props.playerName} 
                    id={this.props.id} 
                    setId={this.props.setId} 
                /> 
            )
        }

    }
}