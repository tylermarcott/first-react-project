import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'

// import for our new component that we created
import MovieCard from "./MovieCard.jsx";


const API_URL = 'http://www.omdbapi.com?apikey=28b65a8c'

// NOTE: can have multiple states and multiple effect hooks per component, there is no limit

const App = () => {
  const [movies, setMovies] = useState([]);
  // make sure to pass in empty string, because search term at the beginning will just be an empty string
  const [searchTerm, setSearchTerm] = useState('');

  // const movie1 = {Title: 'Death Is Hereditary', Year: '2009', imdbID: 'tt1512766', Type: 'movie', Poster: 'N/A'}

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
        // dynamic search for movies
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        // FIXME: this icon is not working
        src={SearchIcon}
        alt="search"
        // pass search term into searchMovies, then when the search button is clicked, it will search for the term that is typed in.
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        // ternary expression. If length of movies > 0, render the first div, else render the second.
        movies?.length > 0
          ? (
            <div className="container"> 
              {/* calling our component and passing prop */}
              {/* <MovieCard movie1={movie1}/> */}
              {/* NOTE: this maps out all the movies from our api call dynamically onto the MovieCard component */}
              {movies.map((movie) => (
                // prop passed has to match the one in the component file
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}


// NOTE: we have to export each one of our components so that we can cal them from somewhere else
export default App;