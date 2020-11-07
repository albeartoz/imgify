import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getLyrics, getSong } from 'genius-lyrics-api';

function App() {
 
  const options = {
    apiKey: '1MZyn5-y_ITCnG6RqGxbT2_yOXGf1RIqsTB_zPl6KWNz3Z7vm63o69cWChh6nubd',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    optimizeQuery: true
  };
  
  getLyrics(options).then((lyrics) => console.log(lyrics));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
