import React, { useState, useEffect } from 'react';

import './App.css'

function App() {

  // Create Player 1 and 2
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneCard, setPlayerOneCard] = useState(null);
  const [playerTwoCard, setPlayerTwoCard] = useState(null);
  const [playerOneName, setPlayerOneName] = useState('Mike');
  const [gameOver, setGameOver] = useState(false);


  const [gameMessage, setGameMessage] = useState('Click button to play!')

  const updateScore = (score, setPlayerScore) => {
    setPlayerScore(score + 1);
  }

  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne > playerTwo) updateScore(playerOneScore, setPlayerOneScore);
    if (playerTwo > playerOne) updateScore(playerTwoScore, setPlayerTwoScore);
  }

  const checkGameOver = () => {
    if (playerOneScore > 9) {
      setGameMessage(`Game over. ${playerOneName} wins!`);
      setGameOver(true);
    }
    else if (playerTwoScore > 9) {
      setGameMessage('Game over. Computer wins!');
      setGameOver(true);
    }
  }

  const playGameHandler = () => {
    // Generate Cards for both players
    const playerOneCard = Math.ceil(Math.random() * 13);
    const playerTwoCard = Math.ceil(Math.random() * 13);
    setPlayerOneCard(playerOneCard);
    setPlayerTwoCard(playerTwoCard);

    // Check who won
    checkWinner(playerOneCard, playerTwoCard);

    // Check if game is over
    checkGameOver();
  }

  useEffect(() => {
    document.title = 'Welcome to War ' + playerOneName;
    setGameMessage(`Score is ${playerOneScore} - ${playerTwoScore}`);
  })

  return (
    <div className='App'>
      <p>What is your name?</p>
      <input value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value)}></input>
      <p>{playerOneName}'s score: {playerOneScore} </p>
      <p>Player Two's score: {playerTwoScore}</p>
      <button disabled={gameOver} onClick={() => {playGameHandler()}}>Click to play!</button>
      <p style={{ fontWeight: 'bold' }}>{gameMessage}</p>
      <p>Player One's card: {playerOneCard}</p>
      <p>Player Two's card: {playerTwoCard}</p>
    </div>
  );
}

export default App;
