import React, { useState } from 'react';

function App() {

  // Create Player 1 and 2
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneCard, setPlayerOneCard] = useState(null);
  const [playerTwoCard, setPlayerTwoCard] = useState(null);
  const [gameMessage, setGameMessage] = useState('Click button to play!')

  const updateScore = (score, setPlayerScore) => {
    setPlayerScore(score + 1);
  }

  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne > playerTwo) {
      updateScore(playerOneScore, setPlayerOneScore);
      setGameMessage('Player One Wins!')
    }
    else if (playerTwo > playerOne) {
      updateScore(playerTwoScore, setPlayerTwoScore);
      setGameMessage('Player Two Wins!')
    }
    else {
      setGameMessage('Draw!')
    }
  }

  const playGameHandler = () => {
    // Generate Cards for both players
    const playerOneCard = Math.ceil(Math.random() * 13);
    const playerTwoCard = Math.ceil(Math.random() * 13);
    setPlayerOneCard(playerOneCard);
    setPlayerTwoCard(playerTwoCard);

    // Check who won
    checkWinner(playerOneCard, playerTwoCard)
  }

  return (
    <div>
      <p>Player One's score: {playerOneScore}</p>
      <p>Player Two's score: {playerTwoScore}</p>
      <button onClick={() => {playGameHandler()}}>Click to play!</button>
      <p style={{ fontWeight: 'bold' }}>{gameMessage}</p>
      <p>Player One's card: {playerOneCard}</p>
      <p>Player Two's card: {playerTwoCard}</p>
    </div>
  );
}

export default App;
