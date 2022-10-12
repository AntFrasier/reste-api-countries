import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Details from './component/Details';
import Loading from './component/Loading';
import axios from "axios";
import { useEffect, useState } from 'react';

const baseUrl = "https://restcountries.com/v3.1";

function App() {
  const [loading, setLoading] = useState(true);
  const [ThumByPage, setThumbByPage]= useState(25);
  const [countries, setCountries] = useState ([]);
  const [searchedCountrie, setSearchedCountrie] = useState('');
  const [urlParams, setUrlParams] = useState('all');

  useEffect ( () => {
    const controller = new AbortController(); //added to secure the fetch data if a new urlParams comes it will abord the current fetch
    setLoading(true);
    axios.get(`${baseUrl}/${urlParams}`)
      .then ((response) => {
          setCountries(response.data);
        }) 
      .catch ( (e) => alert("erreur : ", e))
      .finally (() => setLoading(false));

      return () => { //added to secure the fetch data if a new urlParams comes it will abord the current fetch
        controller.abort();
      }
  },[urlParams]);

  var listItem =  '';
//todo add a search function that work lol
  if(searchedCountrie === '') {
    listItem=countries.slice(0, ThumByPage);
  } else {
    listItem= countries.map ((countrie) => countrie.name === searchedCountrie )
  }
 
  function handleChange (value){
    setUrlParams (value.target.value);
    console.log('value: ', value.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <input type="text" value={searchedCountrie} onChange={(e) => setSearchedCountrie(e.target.value)} />
        <select defaultValue={'all'} value={urlParams} onChange={handleChange}>
          <option value="region/Europe">Europe</option>
          <option value="region/Asia">Asia</option>
          <option value="region/Oceania">Oceania</option>
          <option value="all">all</option>
        </select>
        {loading ?  <Loading /> : 
          <Home 
          listItem={listItem}
        />
        }
      
        <Details />
      </main>
    </div>
  );
}

export default App;
