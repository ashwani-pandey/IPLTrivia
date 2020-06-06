import React from 'react';
import './App.css';
import TeamsView from "./components/TeamsView";

function App() {
  return (
    <div className="App">
      <div className="head-text">
        Enjoy some amazing IPL Trivia.<br /> Any guesses what's behind each card?!
      </div>
      <TeamsView />
    </div>
  );
}

export default App;
