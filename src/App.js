import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'

// import for our new component that we created
import MovieCard from "./MovieCard.jsx";


const API_URL = 'http://www.omdbapi.com?apikey=28b65a8c'

const App = () => {
  const [movies, setMovies] = useState([]);

  const movie1 = {Title: 'Death Is Hereditary', Year: '2009', imdbID: 'tt1512766', Type: 'movie', Poster: 'N/A'}

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('hereditary');
  }, []);

  return(
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        value="Superman" 
        onChange={() => {}}
        />
        <img 
        // FIXME: this icon is not working
        src={SearchIcon}
        alt="search"
        onClick={() => {}}
        />
      </div>

      <div className="container"> 
        {/* calling our component and passing prop */}
        <MovieCard movie1={movie1}/>
      </div>

    </div>
  );
}


// NOTE: we have to export each one of our components so that we can cal them from somewhere else
export default App;