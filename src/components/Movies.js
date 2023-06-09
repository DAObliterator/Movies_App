import React from "react";
import MovieCard from "./MovieCard";

const Movies = (props) => {
  return props.items.map((movie) => (
      <MovieCard
        className="movie__card"
        key={movie.id}
        id={movie.id}
        image={movie.image}
        name={movie.name}
        year={movie.year}
        genre={movie.genre}
        actors={movie.actors}
      ></MovieCard>
    )
  );
};

export default Movies;
