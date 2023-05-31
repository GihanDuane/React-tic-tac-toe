import Square from './components/Square';
import './App.css';

function Board() {
  return (
    <>
      <div className="App">
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
      </div>
    </>
  );
}

export default Board;
