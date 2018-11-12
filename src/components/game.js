import React, { Component } from "react";
import style from "./game.module.scss";

const Box = props => (
  <button id={props.id} className={style.box} onClick={props.onclick}>
    <h1 className={style.check}>{props.check}</h1>
  </button>
);

class game extends Component {
  state = {
    round: 0,
    playerOne: {
      name: this.props.playerOneName,
      symbol: this.props.playerOneSymbol,
      score: 0,
      win: false
    },
    playerTwo: {
      name: this.props.playerTwoName,
      symbol: this.props.playerTwoSymbol,
      score: 0,
      win: false
    },
    map: ["", "", "", "", "", "", "", "", ""]
  };

  endGame = false;
  clean = false;

  onClick = e => {
    const { id } = e.target;
    const { round, map, playerOne, playerTwo } = this.state;

    if (map[id] === "" && round < 9 && !this.endGame) {
      let mapArr = [...map];
      mapArr[id] = round % 2 === 0 ? playerOne.symbol : playerTwo.symbol;

      this.setState({
        round: round + 1,
        map: mapArr
      });
    }

    if (round === 9) {
      this.endGame = true;
    }
  };

  newGame = () => {
    this.props.resetGame();
    // this.restart();
    // this.setState({
    //   playerOne: { ...this.state.playerOne, score: 0 },
    //   playerTwo: { ...this.state.playerTwo, score: 0 }
    // });
  };

  restart = () => {
    this.setState({
      round: 0,
      map: ["", "", "", "", "", "", "", "", ""],
      playerOne: { ...this.state.playerOne, win: false },
      playerTwo: { ...this.state.playerTwo, win: false }
    });
    this.endGame = false;
    this.clean = false;
    document.querySelectorAll("button").forEach(btn => {
      btn.removeAttribute("style");
    });
    document.getElementById("boxContainer").removeAttribute("style");
  };

  updateScore = player => {
    const { playerOne, playerTwo } = this.state;
    player === 1
      ? this.setState({
          playerOne: { ...playerOne, score: playerOne.score + 1, win: true }
        })
      : this.setState({
          playerTwo: { ...playerTwo, score: playerTwo.score + 1, win: true }
        });
    this.clean = true;
  };

  componentDidUpdate() {
    const { map, playerOne, playerTwo } = this.state;
    const boxOne = document.getElementById("0");
    const boxTwo = document.getElementById("1");
    const boxThree = document.getElementById("2");
    const boxFour = document.getElementById("3");
    const boxFive = document.getElementById("4");
    const boxSix = document.getElementById("5");
    const boxSeven = document.getElementById("6");
    const boxEight = document.getElementById("7");
    const boxNine = document.getElementById("8");

    if (
      map[0] === playerOne.symbol &&
      map[1] === playerOne.symbol &&
      map[2] === playerOne.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxTwo.style.backgroundColor = "#f9823d";
      boxThree.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[3] === playerOne.symbol &&
      map[4] === playerOne.symbol &&
      map[5] === playerOne.symbol
    ) {
      boxFour.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxSix.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[6] === playerOne.symbol &&
      map[7] === playerOne.symbol &&
      map[8] === playerOne.symbol
    ) {
      boxSeven.style.backgroundColor = "#f9823d";
      boxEight.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[0] === playerOne.symbol &&
      map[3] === playerOne.symbol &&
      map[6] === playerOne.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxFour.style.backgroundColor = "#f9823d";
      boxSeven.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[1] === playerOne.symbol &&
      map[4] === playerOne.symbol &&
      map[7] === playerOne.symbol
    ) {
      boxTwo.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxEight.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[2] === playerOne.symbol &&
      map[5] === playerOne.symbol &&
      map[8] === playerOne.symbol
    ) {
      boxThree.style.backgroundColor = "#f9823d";
      boxSix.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[0] === playerOne.symbol &&
      map[4] === playerOne.symbol &&
      map[8] === playerOne.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[2] === playerOne.symbol &&
      map[4] === playerOne.symbol &&
      map[6] === playerOne.symbol
    ) {
      boxThree.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxSeven.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(1);
      }
    }

    if (
      map[0] === playerTwo.symbol &&
      map[1] === playerTwo.symbol &&
      map[2] === playerTwo.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxTwo.style.backgroundColor = "#f9823d";
      boxThree.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[3] === playerTwo.symbol &&
      map[4] === playerTwo.symbol &&
      map[5] === playerTwo.symbol
    ) {
      boxFour.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxSix.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[6] === playerTwo.symbol &&
      map[7] === playerTwo.symbol &&
      map[8] === playerTwo.symbol
    ) {
      boxSeven.style.backgroundColor = "#f9823d";
      boxEight.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[0] === playerTwo.symbol &&
      map[3] === playerTwo.symbol &&
      map[6] === playerTwo.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxFour.style.backgroundColor = "#f9823d";
      boxSeven.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[1] === playerTwo.symbol &&
      map[4] === playerTwo.symbol &&
      map[7] === playerTwo.symbol
    ) {
      boxTwo.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxEight.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[2] === playerTwo.symbol &&
      map[5] === playerTwo.symbol &&
      map[8] === playerTwo.symbol
    ) {
      boxThree.style.backgroundColor = "#f9823d";
      boxSix.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[0] === playerTwo.symbol &&
      map[4] === playerTwo.symbol &&
      map[8] === playerTwo.symbol
    ) {
      boxOne.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxNine.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }

    if (
      map[2] === playerTwo.symbol &&
      map[4] === playerTwo.symbol &&
      map[6] === playerTwo.symbol
    ) {
      boxThree.style.backgroundColor = "#f9823d";
      boxFive.style.backgroundColor = "#f9823d";
      boxSeven.style.backgroundColor = "#f9823d";
      this.endGame = true;
      if (!this.clean) {
        this.updateScore(0);
      }
    }
  }

  result = () => {
    return <div className={style.message}>Player One Win!</div>;
  };

  render() {
    const { round, map, playerOne, playerTwo } = this.state;
    let result;

    if (this.endGame || round === 9) {
      document.getElementById("boxContainer").style.opacity = "0.4";
      if (playerOne.win) {
        result = <div className={style.message}>{playerOne.name} Win!</div>;
      } else if (playerTwo.win) {
        result = <div className={style.message}>{playerTwo.name} Win!</div>;
      } else {
        result = <div className={style.message}>It's a tie!</div>;
      }
    }

    return (
      <div className={style.container}>
        <div className={style.info}>
          <span>Turn:</span>
          <span
            className={
              round % 2 === 0 && !this.endGame && round < 9
                ? style.turnPlayer
                : null
            }
          >
            {playerOne.name}: {playerOne.symbol}
          </span>
          <span
            className={
              round % 2 !== 0 && !this.endGame && round < 9
                ? style.turnPlayer
                : null
            }
          >
            {playerTwo.name}: {playerTwo.symbol}
          </span>
        </div>
        <div className={style.info}>
          <span>Score:</span>
          <span>
            {playerOne.name}: {playerOne.score}
          </span>
          <span>
            {playerTwo.name}: {playerTwo.score}
          </span>
        </div>
        {result}
        <div id="boxContainer" className={style.boxContainer}>
          <Box id="0" check={map[0]} onclick={this.onClick} />
          <Box id="1" check={map[1]} onclick={this.onClick} />
          <Box id="2" check={map[2]} onclick={this.onClick} />
          <Box id="3" check={map[3]} onclick={this.onClick} />
          <Box id="4" check={map[4]} onclick={this.onClick} />
          <Box id="5" check={map[5]} onclick={this.onClick} />
          <Box id="6" check={map[6]} onclick={this.onClick} />
          <Box id="7" check={map[7]} onclick={this.onClick} />
          <Box id="8" check={map[8]} onclick={this.onClick} />
        </div>
        <div className={style.btnContainer}>
          <button className={style.restart} onClick={this.restart}>
            Restart
          </button>
          <button className={style.restart} onClick={this.newGame}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default game;
