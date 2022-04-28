import PlayerForm from '../../DELETE/PlayerForm/PlayerForm'
import React, { Component } from 'react'
import axios from 'axios'
import API from "../../components/API/API";

export default class AddPlayer extends Component {
submitHandler = (formData) => {
    axios.post(`${API.server}/${API.players}`, formData)
    .then(() => {
        this.props.history.push(`/${API.players}`)})
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
        return (
            <PlayerForm
                title="Add New Player"
                handleSubmit={this.submitHandler} 
                button="+ Add Player" 
                handleClick={this.clickHandler}
                backClick = {this.routeClickHandler}
                // route="/player"
            />
        )
    }
}