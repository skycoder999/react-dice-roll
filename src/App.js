import React, { useState, Fragment } from 'react';
import RollDice from './components/RollDiceComp';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState("one");
  const [genranNumber, setGenRanNumber] = useState(["one", "two", "three", "four", "five", "six"]);
  const [isRolling, setIsRolling] = useState(false);


  const onRoll = () => {
    setIsRolling(!isRolling)
    setRandomNumber(genranNumber[Math.floor(Math.random() * genranNumber.length)])
  }

  return (
    <Fragment>
      <div className="App">
        <div className="jumbotron">
          <h1>Roll the Dice Game</h1>
        </div>
        <div className="card">
          <h5 className="card-header" >Roll and See if you win! </h5>
          <div className="card-body">
            <RollDice face={randomNumber} />
            <button className="rollButton" onClick={() => onRoll()}>
              {
                randomNumber !== "six" ? (
                  !isRolling ? ("Roll the Dice") : ("Try Harder, Roll Again")
                ) : ("Congratulation Roll Again")
              }

            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
