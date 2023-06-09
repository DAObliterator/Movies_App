{
  actors.map((actor) => {
    <div className="movie__actor">{actor}</div>;
  });
}

{
  movies.map((movie) => {
    return (
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
    );
  });
}

