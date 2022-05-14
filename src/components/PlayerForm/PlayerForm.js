import React, { Component } from "react";
import Back from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import API from "../../components/API/API";
import "./PlayerForm.scss";
import error from "../../assets/icons/error-24px.svg";
// import { Link } from "react-router-dom"
const lookup = require('country-code-lookup')

class PlayerForm extends Component {
  state = {
    players: [],
    playerName: "",
    description: "",
    points: 0,
    status: null,
    time: 0,
    country: "N/A",
    nameError: "",
    desError: "",
    countryError: "",
    ...this.props.initialFormData,
  };

  validate = () => {
    const errorMessage = "This field is required";
    const formError = {};

    if (!this.state.playerName) {
      formError.nameError = errorMessage;
    }
    if (!this.state.description) {
      formError.desError = errorMessage;
    }
    if (!this.state.country || this.state.country === "N/A") {
      formError.countryError = errorMessage;
    }
    this.setState(formError);

    const hasErrors = Object.keys(formError).length;

    return Boolean(hasErrors);
  };

  submitHandler = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) {
      this.props.handleSubmit({ ...this.state });
    }
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get(`${API.server}/${API.players}`)
      .then((response) => {
        this.setState({
          players: response.data,
        });
      })
      .catch((err) => console.log("error!", err));
  }

  render() {
    return (
      <div className="addPlayer">
        <div className="playerForm__header">
          <div
            onClick={this.props.backClick}
            className="playerForm__header--back"
          >
            <img src={Back} alt="back" />
          </div>
          <h1 className="playerForm__header--title">{this.props.title}</h1>
        </div>
        <form className="playerForm__form" onSubmit={this.submitHandler}>
          <div className="playerForm__form-container">
            <div className="playerForm__itemDetails playerForm__details playerForm__details--left">
            
              <h2 className="playerForm__form--title">Player Details</h2>
              
              <label className="playerForm__form--label" htmlFor="playerName">
                Player Name
              </label>

              <input
                className="playerForm__form--input"
                type="text"
                name="playerName"
                id="playerName"
                placeholder="Player Name"
                value={this.state.playerName}
                onChange={this.changeHandler}
              />
              { this.state.nameError ? (
                <div className="playerForm__error">
                  <img
                    className="playerForm__error--image"
                    src={error}
                    alt="error"
                  />
                  <p className="playerForm__error--text">
                    {this.state.nameError}
                  </p>
                </div>
              ) : null }

              <label
                className="playerForm__form--label"
                htmlFor="playerDescription"
              >
                Description
              </label>
              <textarea
                className="playerForm__form--input"
                type="text"
                name="description"
                id="description"
                placeholder="Please enter a brief description about yourself..."
                rows="5"
                value={this.state.description}
                onChange={this.changeHandler}
              />
              {this.state.desError ? (
                <div className="playerForm__error">
                  <img
                    className="playerForm__error--image"
                    src={error}
                    alt="error"
                  />
                  <p className="playerForm__error--text">{this.state.desError}</p>
                </div>
              ) : null}
            </div>
            <div className="playerForm__availability playerForm__details playerForm__details--right">
              <h2 className="playerForm__form--title">Player Level</h2>
              <label className="playerForm__form--label" htmlFor="status">
                Rookie or Legendary???
              </label>
              <div className="playerForm__radio">
                <div className="playerForm__radio--left">
                  <input
                    className="playerForm__radio--select"
                    type="radio"
                    name="status"
                    id="status"
                    value="Rookie"
                    checked={this.state.status === "Rookie"}
                    onChange={this.changeHandler}
                  />
                  <p className="playerForm__radio--text">Rookie</p>
                </div>
                <div className="playerForm__radio--right">
                  <input
                    className="playerForm__radio--select"
                    type="radio"
                    name="status"
                    id="status"
                    value="Legendary"
                    checked={this.state.status === "Legendary"}
                    onChange={this.changeHandler}
                  />
                  <p className="playerForm__radio--text">Legendary</p>
                </div>
              </div>
              {this.state.statusError ? (
                <div className="playerForm__error">
                  <img
                    className="playerForm__error--image"
                    src={error}
                    alt="error"
                  />
                  <p className="playerForm__error--text">
                    {this.state.statusError}
                  </p>
                </div>
              ) : null}
              <label className="playerForm__form--label" htmlFor="country">
                Country
              </label>
              <select
                className="playerForm__form--select"
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.changeHandler}
              >
                <option
                  className="playerForm__form--option"
                  disabled
                  hidden
                  value="N/A"
                >
                  Please Select country
                </option>
                
                {
                  lookup.countries.map((country) => {
                    return (
                      <option
                        key={country.iso3}
                        className="playerForm__form--option"
                        value={country.country}
                      >
                        {country.country}
                      </option>
                    );
                  }
                )
                }
              </select>
              {this.state.countryError ? (
                <div className="playerForm__error">
                  <img
                    className="playerForm__error--image"
                    src={error}
                    alt="error"
                  />
                  <p className="playerForm__error--text">
                    {this.state.countryError}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="playerForm__buttons">
            <button
              type="button"
              onClick={this.props.handleClick}
              className="playerForm__cancel-button"
            >
              Cancel
            </button>
            <input type="submit" value={this.props.button} className="playerForm__add-button">

            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;