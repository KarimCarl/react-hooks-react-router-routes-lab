import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log(movies);

  const movieGeneration = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        Genres:
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movieGeneration}
    </div>
  );
}

export default Movies;