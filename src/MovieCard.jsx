import React from "react";

// NOTE: whenever you are creating a new react component, using .jsx is preferable. Just nice to see the react logo.

// syntax with ({ movie1 }) is object destructuring, which allows us to choose something specific that is being passed in the props

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;