import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Cat() {
  return (
    <div className='cat-wrapper'>Cat</div>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  if (isPlaying) {
    return (
      <div className="App">
        <div className='game-wrapper'>
          <div className='playing-field'>
            <div className='playable-cats'>
              <Cat />
            </div>
            <div className='non-playable-cats'>
              <Cat />
            </div>
          </div>
          <div className='game-menu'>
            <div className='cat-list'>
              Cat
            </div>
            <div className='cat-list-divider' />
            <div className='cat-list'>
              Cat
            </div>
          </div>
        </div>

          <button className='end-game-button' onClick={() => setIsPlaying(false)}>
            End game
          </button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/hegassen_scroll_original.jpg" className="hegassen-scroll-original" alt="logo" />
        <h1>Thanks for playing Windblown!</h1>
        <p>
          This game was inspired by the incredible <a href="https://en.wikipedia.org/wiki/He-gassen">He Gassen</a> Japanese scroll paintings that depict various people using flatulation to fight and play. The scroll was developed in the Edo period by an unknown artist or group of artists.
        </p>
        <button onClick={() => setIsPlaying(true)}>
          Play again
        </button>
      </header>
    </div>
  );
}

export default App;
