import Square from './components/Square';
import calculateWinner from './components/calculateWinner';
import './App.css';
import { useState } from 'react';


function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    if ( calculateWinner (squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
   
  }

  const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "winner: " +  winner;
    } else {
      status = "Next Player: " + (xIsNext ? "X" : "O");
    }

  return (
    <>
      <div className="App">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onsquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onsquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onsquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onsquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onsquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onsquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onsquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onsquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onsquareClick={() => handleClick(8)}/>
        </div>
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
