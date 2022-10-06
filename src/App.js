import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Details from './component/Details';
import axios from "axios";
import { useEffect, useState } from 'react';


const baseUrl = "https://restcountries.com/v3.1";






function App() {

  const [countries, setCountries] = useState ([]);

  useEffect ( () => {
    axios.get(`${baseUrl}/all`).then ((response) => {
      setCountries(response.data);
      console.log(response.data);
    }) 
  },[]);

  const listItem = countries.map ((countrie) => <li key={countrie.population}>{countrie.capital}</li>);
  return (
    <div className="App">
      <ul>
        {listItem}
      </ul>
      <Header />
      <Home />
      <Details />
    </div>
  );
}

export default App;
