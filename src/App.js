import React, { useState, useEffect } from 'react';

import './App.css'

function App() {

  const [playerName, setPlayerName] = useState('Mike');
  const [playerScore, setPlayerScore] = useState(0);
  const [playerCard, setPlayerCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [compScore, setCompScore] = useState(0);
  const [compCard, setCompCard] = useState(null);
  const [gameMessage, setGameMessage] = useState('Click button to play!')
  const [gameOver, setGameOver] = useState(false);

  const updateScore = (score, setPlayerScore) => {
    setPlayerScore(score + 1);
  };

  const updateCards = (playerCard) => {
    setPlayerCards(oldCards => [...oldCards, playerCard])
  };

  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne > playerTwo) updateScore(playerScore, setPlayerScore);
    if (playerTwo > playerOne) updateScore(compScore, setCompScore);
  };

  const checkGameOver = (playerScore, compScore) => {
    if (playerScore > 9) {
      setGameMessage(`Game over. ${playerName} wins! Score is ${playerScore} - ${compScore}`);
      setGameOver(true);
    }
    else if (compScore > 9) {
      setGameMessage(`Game over. Computer wins! Score is ${playerScore} - ${compScore}`);
      setGameOver(true);
    }
  }

  const playGameHandler = () => {
    const playerCard = Math.ceil(Math.random() * 13);
    const compCard = Math.ceil(Math.random() * 13);
    setPlayerCard(playerCard);
    setCompCard(compCard);
    checkWinner(playerCard, compCard);
  }

  const prevCards = playerCards.map((card, i) => {
    if (i > 0) {
      return (
        <span className={'cardNum'} key={`card- + ${i}`}>{card}</span>
      )
    } else {
      return null;
    }
  })

  useEffect(() => {
    document.title = 'Welcome to War ' + playerName;
  }, [playerName])

  useEffect(() => {
    setGameMessage(`Score is ${playerScore} - ${compScore}`);
  }, [compScore, playerScore]);

  useEffect(() => {
    checkGameOver(playerScore, compScore);
  });

  useEffect(() => {
    updateCards(playerCard);
  }, [playerCard]);

  return (
    <div className='App'>
      <p>What is your name?</p>
      <input value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
      <div className='scoreboard'>
        <p className='score'>{playerName}'s score: {playerScore} </p>
        <p className='score'>Player Two's score: {compScore}</p>
      </div>
      <button disabled={gameOver} onClick={() => {playGameHandler()}}>Click to play!</button>
      <p className='msg' style={{ fontWeight: 'bold' }}>{gameMessage}</p>
      <div className='card'>
        <p>{playerName}'s card:</p>
        <p>{playerCard}</p>
        <div className='history'>{prevCards}</div>
      </div>
      <div className='card'>
        <p>Player Two's card:</p>
        <p>{compCard}</p>
      </div>
    </div>
  );
}

export default App;
