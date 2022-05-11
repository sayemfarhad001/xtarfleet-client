import React from "react";
import axios from "axios";
import API from "../../components/API/API";
import "./Leaderboard.scss";
import Player from "../Player/Player";
import sort from "../../assets/icons/sort-24px.svg";
import search from "../../assets/icons/search-24px.svg";

import { Link } from "react-router-dom";
import logo from "../../assets/logo/xtarfleet-logo.png";

// import TextField from "@mui/material/TextField";

// function List(props) {
//   return (
//       <ul>
//           {data.map((item) => (
//               <li key={item.id}>{item.text}</li>
//           ))}
//       </ul>
//   )
// }

// let data = [{
//   "id": 1,
//   "text": "Devpulse"
// }, {
//   "id": 2,
//   "text": "Linklinks"
// }, {
//   "id": 3,
//   "text": "Centizu"
// }, {
//   "id": 4,
//   "text": "Dynabox"
// }, {
//   "id": 5,
//   "text": "Avaveo"
// }, {
//   "id": 6,
//   "text": "Demivee"
// }, {
//   "id": 7,
//   "text": "Jayo"
// }, {
//   "id": 8,
//   "text": "Blognation"
// }, {
//   "id": 9,
//   "text": "Podcat"
// }, {
//   "id": 10,
//   "text": "Layo"
// }]  

class Leaderboard extends React.Component {
  state = {
    playersData: [],
    inputText: ""
  };


  componentDidMount() {
    axios.get(`${API.server}/${API.players}`).then((response) => {
      this.setState({ playersData: response.data });
    });
  }
  inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    this.setState({ inputText : lowerCase });
  };



  render() {
    const reload = () => {
      axios
      .get(`${API.server}/${API.players}`)
      .then((results) =>
        this.setState({ playersData: results.data, isLoaded: true })
      )
      .catch((e) => console.error(e));
    }

    return (
      <section className="player">
         <Link to="/">
            <img src={logo} className="xtarfleet__logo leaderboard__logo" alt="logo"></img>
          </Link>
        <div className="player__subheader">
          <h1 className="player__title">Leaderboard</h1>
          <div>
            <div className="player__search">
              {/* <div className="search">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              </div>
              <List /> */}
              <label for="q"></label>
              <input
                onChange={this.inputHandler}
                className="player__search-input"
                type="search"
                name="q"
                id="q"
                placeholder="Search..."
              ></input>
              <img
                className="player__search-icon"
                src={search}
                alt="magnifying glass"
              />
            </div>
          </div>
        </div>

        <div className="player__table__main">
          <div>
            <div className="player__table--header">
              <div className="player__table player__table__one">
                PLAYER'S NAME
                <img src={sort} alt="up and down arrow" />
              </div>

              <div className="player__table">
                POINTS
                <img src={sort} alt="up and down arrow" />
              </div>

              <div className="player__table">
                TIME
                <img src={sort} alt="up and down arrow" />
              </div>

              <div className="player__table">
                COUNTRY
                <img src={sort} alt="up and down arrow" />
              </div>
              <div className="player__table">
                LEVEL
                <img src={sort} alt="up and down arrow" />
              </div>
            </div>

            {this.state.playersData
              .filter((elem)=>{
                if ( this.state.inputText === "" ) { return elem } 
                else { return elem.playerName.toLowerCase().includes(this.state.inputText) }
              })
              .map((elem) => {
              return (
                <Player
                  key={elem.id}
                  id={elem.id}
                  playerName={elem.playerName}
                  country={elem.country}
                  description={elem.description}
                  points={elem.points}
                  time={elem.time}
                  status={elem.status}
                  reload={reload}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Leaderboard;
