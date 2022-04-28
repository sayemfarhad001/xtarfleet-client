import React from "react";
import axios from "axios";
import API from "../../components/API/API";
import "./Leaderboard.scss";
import Player from "../Player/Player";
import sort from "../../assets/icons/sort-24px.svg";
import search from "../../assets/icons/search-24px.svg";

import { Link } from "react-router-dom";
import logo from "../../assets/logo/xtarfleet-logo.png";
// import { Link } from "react-router-dom";

class Leaderboard extends React.Component {
  state = {
    playersData: [],
  };

  componentDidMount() {
    axios.get(`${API.server}/${API.players}`).then((response) => {
      this.setState({ playersData: response.data });
    });
  }

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
              <input
                className="player__search-input"
                type="text"
                placeholder="Search..."
              ></input>
              <img
                className="player__search-icon"
                src={search}
                alt="magnifying glass"
              />
            </div>
            {/* <Link to={`/players/add`}>
              <div className="player__button">
                <p>+ Add New Item</p>
              </div>
            </Link> */}
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

            {this.state.playersData.map((elem) => {
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
        
        {/* <table className="player__table__main">
          <tbody>
            <tr className="player__table--header">
              <th className="player__table">
                PLAYER'S NAME
                <img src={sort} alt="up and down arrow" />
              </th>

              <th className="player__table">
                POINTS
                <img src={sort} alt="up and down arrow" />
              </th>

              <th className="player__table">
                LEVEL
                <img src={sort} alt="up and down arrow" />
              </th>

              <th className="player__table">
                TIME
                <img src={sort} alt="up and down arrow" />
              </th>

              <th className="player__table">
                COUNTRY
                <img src={sort} alt="up and down arrow" />
              </th>
            </tr>

            {this.state.playersData.map((elem) => {
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
          </tbody>
        </table> */}
      </section>
    );
  }
}

export default Leaderboard;
