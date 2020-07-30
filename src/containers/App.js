import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import CardList from '../components/CardList';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardObj: {
        person: "",
        planet: "",
        species: ""
      },
      birthDate: new Date(),
      urls: [],
    }
  }

  fetchPeople = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(personData => {
      this.setState(prevState => {
        let cardObj = Object.assign({}, prevState.cardObj);
        cardObj.person = personData.name;
        return { cardObj };
      })});
  };

  fetchPlanet = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(personData => {
      this.setState(prevState => {
        let cardObj = Object.assign({}, prevState.cardObj);
        cardObj.planet = personData.name;
        return { cardObj };
      })});
  };

  fetchSpecies = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(personData => {
      this.setState(prevState => {
        let cardObj = Object.assign({}, prevState.cardObj);
        cardObj.species = personData.name;
        return { cardObj };
      })});
  };

  handleChange = (date) => {
    const urls = [
      `https://swapi.py4e.com/api/people/${date.getFullYear() % 30 + 1}/`,
      `https://swapi.py4e.com/api/planets/${date.getMonth() + 1}/`,
      `https://swapi.py4e.com/api/species/${date.getDate()}/`
    ];
    this.fetchPeople(urls[0]);
    this.fetchPlanet(urls[1]);
    this.fetchSpecies(urls[2]);
    this.setState({
      birthDate: date
    });
  };

  render() {
    const { cardObj, urls } = this.state;
    console.log(cardObj);
    return (
      <div className="tc">
        <h1 className="f1 fl w-100 pa2 tc yellow">STAR WARS HOROSCOPE</h1>
        <h4 className="f3 fl w-100 pa2 tc yellow">Enter your birthday:</h4>
        <DatePicker
        selected={this.state.birthDate}
        onChange={this.handleChange}
        />
        <br />
        <br />
        <CardList cardObj={cardObj} />
      </div>
    );
  }

}

export default App;
