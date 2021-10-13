import React from 'react';
import './App.css';
import crests from './images/crests.jpg'
import data from './data.json';
import Hogwarts from './components/Hogwarts';
import Durmstrang from './components/Durmstrang';
import Beauxbatons from './components/Beauxbatons';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="main-title">Professors and staff members of the Wizarding Schools</h1>
      </header>
      <Durmstrang data={ data } />
      <Beauxbatons data={ data } />
      <Hogwarts data={ data } />
    </div>
  );
}

export default App;

// References
// data from http://hp-api.herokuapp.com/
// images from https://harrypotter.fandom.com/wiki/