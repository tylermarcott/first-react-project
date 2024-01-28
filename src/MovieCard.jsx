import React from "react";

// NOTE: whenever you are creating a new react component, using .jsx is preferable. Just nice to see the react logo.

// syntax with ({ movie1 }) is object destructuring, which allows us to choose something specific that is being passed in the props

const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img src={movie1.Poster !== 'N/A' ? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.Title} />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;