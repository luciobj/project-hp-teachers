import React, { Component, createContext } from 'react';
import './App.css';
import crests from './images/crests.jpg'
import data from './data.json';
import Hogwarts from './components/Hogwarts';
import Durmstrang from './components/Durmstrang';
import Beauxbatons from './components/Beauxbatons';

export const context = createContext();

class App extends Component {
  constructor() {
    super();

    this.state = {
      filtered: [],
    };
  }

  render() {
    const { filtered } = this.state;
    const BeauxbatonsPeople = data.filter((caracter) => caracter
      .schoolafiliation === "Beauxbatons Academy of Magic");
    const DurmstrangPeople = data.filter((caracter) => caracter
      .schoolafiliation === "Durmstrang Institute");
    const HogwartsPeople = data.filter((caracter) => caracter
      .schoolafiliation === "Hogwarts");
    const contextValue = {
      Durmstrang: DurmstrangPeople,
      Beauxbatons: BeauxbatonsPeople,
      Hogwarts: {
        Headmaster: HogwartsPeople.filter((caracter) => caracter
          .headmasterOrMistress)[0],
        "activeTeachers": HogwartsPeople.filter((teachers) => teachers
          .currentlyEmployed && !teachers.headmasterOrMistress),
        "otherTeachers": HogwartsPeople.filter((teachers) => !teachers
          .currentlyEmployed),
      },
      filtered,
    }
    return (
      <context.Provider value ={ contextValue }>
        <div className="app">
          <img src={ crests } alt="Schools Crests" className="image"/>
          <header>
            <h1 className="main-title">
              Professors and staff members of the Wizarding Schools
            </h1>
          </header>
          <div className="schools-container">
            <Beauxbatons />
            <Hogwarts />
            <Durmstrang />
          </div>
        </div>
      </context.Provider>
    );
  }
}

export default App;

// References
// data from http://hp-api.herokuapp.com/
// images from https://harrypotter.fandom.com/wiki/