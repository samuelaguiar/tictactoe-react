import React, { Component } from "react";
import Layout from "../components/layout";
import Game from "../components/game";
import style from "./index.module.scss";

class index extends Component {
  state = {
    playerOneName: "Player One",
    playerTwoName: "Player Two",
    playerOneSymbol: "",
    playerTwoSymbol: "",
    gameStart: 0
  };

  resetGame = () => {
    this.setState({ gameStart: 0 });
  };

  onClick = e => {
    e.preventDefault();
    this.setState({ gameStart: 1 });

    if (this.state.playerOneSymbol === "") {
      this.setState({
        playerOneSymbol: "X",
        playerTwoSymbol: "O"
      });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  symbol = e => {
    const pOne = document.getElementsByName("playerOneSymbol");
    const pTwo = document.getElementsByName("playerTwoSymbol");

    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === "playerOneSymbol") {
      pTwo.forEach(radio => {
        if (radio.value !== e.target.value) {
          radio.click();
        }
      });
    }

    if (e.target.name === "playerTwoSymbol") {
      pOne.forEach(radio => {
        if (radio.value !== e.target.value) {
          radio.click();
        }
      });
    }
  };

  render() {
    const {
      gameStart,
      playerOneName,
      playerTwoName,
      playerOneSymbol,
      playerTwoSymbol
    } = this.state;
    let content;

    if (!gameStart) {
      content = (
        <form className={style.form}>
          <div className={style.inputGroup}>
            <div>
              <label htmlFor="playerOne">Player One:</label>
              <input
                type="text"
                name="playerOneName"
                onChange={this.onChange}
              />
            </div>
            <div className={style.radios}>
              <input
                type="radio"
                name="playerOneSymbol"
                value="X"
                onChange={this.symbol}
              />
              X
              <input
                type="radio"
                name="playerOneSymbol"
                value="O"
                onChange={this.symbol}
              />
              O
            </div>
          </div>
          <div className={style.inputGroup}>
            <div>
              <label htmlFor="playerTwo">Player Two:</label>
              <input
                type="text"
                name="playerTwoName"
                onChange={this.onChange}
              />
            </div>
            <div className={style.radios}>
              <input
                type="radio"
                name="playerTwoSymbol"
                value="X"
                onChange={this.symbol}
              />
              X
              <input
                type="radio"
                name="playerTwoSymbol"
                value="O"
                onChange={this.symbol}
              />
              O
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <input
              type="submit"
              value="Game Start"
              onClick={this.onClick}
              className={style.btn}
            />
          </div>
        </form>
      );
    } else {
      content = (
        <Game
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          playerOneSymbol={playerOneSymbol}
          playerTwoSymbol={playerTwoSymbol}
          resetGame={this.resetGame}
        />
      );
    }

    return <Layout>{content}</Layout>;
  }
}

export default index;
