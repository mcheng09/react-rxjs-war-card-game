import React, { useState, useEffect } from 'react';

import './App.css'

function App() {

  const [playerName, setPlayerName] = useState('Mike');
  const [playerScore, setPlayerScore] = useState(0);
  const [playerCard, setPlayerCard] = useState(null);
  const [compScore, setCompScore] = useState(0);
  const [compCard, setCompCard] = useState(null);
  const [gameMessage, setGameMessage] = useState('Click button to play!')
  const [gameOver, setGameOver] = useState(false);

  const updateScore = (score, setPlayerScore) => {
    setPlayerScore(score + 1);
  }

  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne > playerTwo) updateScore(playerScore, setPlayerScore);
    if (playerTwo > playerOne) updateScore(compScore, setCompScore);
  }

  const checkGameOver = () => {
    if (playerScore > 9) {
      setGameMessage(`Game over. ${playerName} wins!`);
      setGameOver(true);
    }
    else if (compScore > 9) {
      setGameMessage('Game over. Computer wins!');
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

  useEffect(() => {
    document.title = 'Welcome to War ' + playerName;
    setGameMessage(`Score is ${playerScore} - ${compScore}`);
  }, [playerName, compScore, playerScore]);

  useEffect(() => {
    checkGameOver();
  });

  return (
    <div className='App'>
      <p>What is your name?</p>
      <input value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
      <p>{playerName}'s score: {playerScore} </p>
      <p>Player Two's score: {compScore}</p>
      <button disabled={gameOver} onClick={() => {playGameHandler()}}>Click to play!</button>
      <p style={{ fontWeight: 'bold' }}>{gameMessage}</p>
      <div className='card'>{playerName}'s card: <span>{playerCard}</span></div>
      <div className='card'>Player Two's card: <span>{compCard}</span></div>
    </div>
  );
}

export default App;
