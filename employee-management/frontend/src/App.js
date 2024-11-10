import React from 'react';
import logo from './logo.svg';
import dealsdry from './dealsdry.png'; // Import the image file
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="DealsDry">
        {/* Use the imported image here */}
        <img src={dealsdry} className="App-logo" alt="DealsDry logo" />
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
