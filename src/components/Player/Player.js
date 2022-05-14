import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Player.scss";

import "../Leaderboard/Leaderboard";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default class Player extends Component {
  state = {
    displayModal: false,
    deleteRequest: false,
  };

  render() {
    let { id, playerName, points, status, time, country } = this.props;

    return (
        <div className="player__row" id={id}>
            <div className="player__top">
                <div className="player__splitleft">
                    <div className="player__name">
                        <h4 className="player__subtitle">PLAYER'S NAME</h4>
                        <div className="player__item">
                            <Link
                                className="player__link"
                                to={`/players/${id}`}
                            >
                                <p>{playerName}</p>
                                <img className="player__item__image" alt="chevron" src={chevron} />
                            </Link>
                        </div>
                    </div>
                    <div className="player__points">
                        <h4 className="player__subtitle">POINTS</h4>
                        <p className="player__text">
                            {points}
                        </p>
                    </div>
                </div>
                <div className="player__splitright">
                    <div className="player__time">
                        <h4 className="player__subtitle">TIME</h4>
                        <p className="player__text">{time}</p>
                    </div>
                    <div className="player__country--name">
                        <h4 className="player__subtitle">COUNTRY</h4>
                        <p className="player__text">{country}</p>
                    </div>
                </div>
            </div>    
            <div className="player__bottom">
                <div className="player__status">
                        <h4 className="player__subtitle">LEVEL</h4>
                        <p
                            className={`player__status--text ${
                            status === "Rookie" 
                            ? "rookie" : "legendary"
                            }`}
                        >
                            {" "}
                            {status}{" "}
                        </p>
                </div>
            </div>
        </div>
    );
  }
}