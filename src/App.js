
import './App.css';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState([])
  const getUrl = async () => {
    await fetch(`http://www.omdbapi.com/?s=${search}&apikey=f5e72dd6`)
      .then(res => res.json())
      .then(json => {
        if (json.Search) {
          setMovie(json.Search)
        }

      })
  }
  useEffect(() => {
    getUrl()
  }, [search])


  console.log(movie);
  console.log(search);
  return (

    <div>
      <Routes>
        <Route path='/' element={<NavBar setSearch={setSearch} />} />
        <Route path='/Movie' element={<Card movie={movie} />} />
      
      </Routes>
    </div>

      );
}

      export default App;
