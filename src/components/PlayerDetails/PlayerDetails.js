import React from "react";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
// import edit from "../../assets/icons/edit-24px.svg";
import "./PlayerDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PlayerDetails extends React.Component {
    state = {
        singlePlayerData: [],
        urlID: this.props.match.params.id,
        };

    componentDidMount() {
        axios
            .get(`http://localhost:2000/players/${this.state.urlID}`)
            .then((response) => {
            this.setState({ singlePlayerData: response.data });
            });
    }

    render() {
        let { id, playerName, points, status, time, country, description  } =
          this.state.singlePlayerData;
    
        return (
          <div className="player__details" id={id}>
            <div className="player__details--header">
              <div className="player__details--name">
                <Link to={"/players"}>
                  <img alt="" src={arrowBack} />
                </Link>
                <h4>{playerName}</h4>
              </div>
              {/* <div className="player__details--edit">
                <Link to={`/players/${id}/edit`}>
                  <img
                    className="player__details--edit-icon"
                    alt="pencil"
                    src={edit}
                  />
                  <p className="player__details--edit-text">Edit</p>
                </Link>
              </div> */}
            </div>
    
            <div className="player__details--container">
              <div className="player__details--container-left">
                <div className="player__details--desc">
                  <h4 className="player__details--subheader">
                    PLAYER DESCRIPTION:
                  </h4>
                  <p className="player__details--text">{description} </p>
                </div>
    
                <div className="player__details--points">
                  <h4 className="player__details--subheader">POINTS:</h4>
                  <p className="player__details--text">{points}</p>
                </div>
              </div>
    
              <div className="player__details--container-right">
                <div className="player__details--sq">
                  <div className="player__details--status">
                    <h4 className="player__details--subheader">STATUS:</h4>
                    <p
                      className={`inventory__details--stock ${
                        status === "Rookie" ? "rookie" : "legendary"
                      }`}
                    >
                      {" "}
                      {status}{" "}
                    </p>
                  </div>
    
                  <div className="player__details--time">
                    <h4 className="player__details--subheader">TIME:</h4>
                    <p className="player__details--text">{time}</p>
                  </div>
                </div>
    
                <div className="player__details--country">
                  <h4 className="player__details--subheader">COUNTRY:</h4>
                  <p className="player__details--text">{country}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }


}
