import React, { Component } from "react";
// import API from "../../components/API/API";
// import axios from "axios";
// import classNames from "classnames";
import "./Player.scss";
import "../Leaderboard/Leaderboard";
// import editIcon from "../../assets/icons/edit-24px.svg";
// import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
// import close from "../../assets/icons/close-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import { Route, Link } from "react-router-dom";
import PlayerDetails from '../PlayerDetails/PlayerDetails'
// import { Route, Switch} from "react-router-dom";

export default class Player extends Component {
  state = {
    displayModal: false,
    deleteRequest: false,
  };

  render() {
    let { id, playerName, points, status, time, country } =
      this.props;

    // const classes = {
    //   modal: "player__modal",
    //   hidden: "hidden",
    //   display: "display",
    // };

    // let modalClass = classNames(classes.modal, classes.hidden);

    //Toggle modal on click function
    // const toggleModal = () => {
    //   if (this.state.displayModal) {
    //     this.setState({ displayModal: false });
    //     return;
    //   }
    //   this.setState({ displayModal: true });
    // };

    // const deleteInventory = () => {
    //     axios
    //       .delete(`${API.server}/${API.players}/${id}`)
    //       .then(() => {
    //         this.props.reload();
    //       }).then(() => {
    //         this.setState({ displayModal: false})
    //       })
    //       .catch((e) => console.error(e));
    //   };
  

    //if statement to check for modal on re-render
    // if (this.state.displayModal) {
    //   modalClass = classNames(classes.modal, classes.display);
    // }

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
                            {/* <Route
                                path={`/players/:id`}
                                render={(props) => <PlayerDetails match={props.match}/>}
                                // component={PlayerDetails}
                            /> */}
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

    //   <tr className="player__row" id={id}>
    //     <td className="player__name">
    //       <h4 className="player__subtitle">PLAYER'S NAME</h4>
    //       <div className="player__item">
    //         <Link
    //           className="player__link"
    //           to={`players/${id}`}
    //         >
    //           <p>{playerName}</p>
    //           <img alt="chevron" src={chevron} />
    //         </Link>
    //       </div>
    //     </td>
    //     <td className="player__points">
    //       <h4 className="player__subtitle">POINTS</h4>
    //       <p className="player__text">
    //         {points}
    //       </p>
    //     </td>
    //     <td className="player__status">
    //       <h4 className="player__subtitle">LEVEL</h4>
    //       <p
    //         className={`player__status--text ${
    //           status === "Rookie" 
    //           ? "rookie" : "legendary"
    //         }`}
    //       >
    //         {" "}
    //         {status}{" "}
    //       </p>
    //     </td>

    //     <td className="player__time">
    //       <h4 className="player__subtitle">TIME</h4>
    //       <p className="player__text">{time}</p>
    //     </td>

    //     <td className="player__country--name">
    //       <h4 className="player__subtitle">COUNTRY</h4>
    //       <p className="player__text">{country}</p>
    //     </td>
        
        // {/* <td className="player__icons">
        //   <img
        //     className="player__icon--left"
        //     src={deleteIcon}
        //     onClick={toggleModal}
        //     alt="garbage can"
        //   />
        //   <Link to={`/players/${this.props.id}/edit`}>
        //     <img
        //       className="player__icon--right"
        //       src={editIcon}
        //       alt="pencil"
        //     />
        //   </Link>
        // </td>

        // <div className={modalClass}>
        //   <div>
        //     <h1 className="player__modal--title">
        //       Delete {playerName} Player?
        //     </h1>
        //     <p className="player__modal--text">
        //       Please confirm that you'd like to delete {playerName} from the
        //       leaderboard. You won't be able to undo this action.
        //     </p>
        //     <img
        //       alt="player icon"
        //       className="player__modal--icon"
        //       onClick={toggleModal}
        //       src={close}
        //     />
        //     <div>
        //       <button
        //         className="player__modal--cancel"
        //         onClick={toggleModal}
        //       >
        //         Cancel
        //       </button>
        //       <button
        //         className="player__modal--delete"
        //         // onClick={deleteInventory}
        //       >
        //         Delete
        //       </button>
        //     </div>
        //   </div>
        // </div> */}
    //   {/* </tr> */}
    );
  }
}

// let Sstatus = switch(status) {
//   case "Expert":
//     status === "EXPERT"
//     break;
//   case "Amateur":
//     status === "AMATEUR"
//     break;
//   default:
//     status === "LEGENDARY"
// }