import movies from "./data/movies";

export function MoviesList() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[50px] m-[30px]">
        {movies.map((movie, index) => {
          return (
            <div
              className="flex flex-row box-border justify-start gap-[50px] p-[30px] w-[50px] h-fit"
              key={index}
            >
              <img
                src={movie.image}
                alt="movie-image"
                className="w-[50px] h-[50px] rounded-[8px]"
              />
              <div className="flex flex-col text-left w-2/3 box-border">
                <div className="text-black" key={index}>
                  Title: {movie.title}
                </div>
                <div className="text-black" key={index}>
                  Year: {movie.year}
                </div>
                <div className="text-black" key={index}>
                  Runtime: {movie.runtime}
                </div>
                <div className="text-black" key={index}>
                  Director: {movie.director}
                </div>
                <div
                  className="flex flex-row gap-2 text-black items-center"
                  key={index}
                >
                  Genres:{" "}
                  {movie.genres.map((genre, index) => {
                    return (
                      <div
                        id="Genre"
                        className="text-black p-1 rounded-lg"
                        key={index}
                      >
                        {genre}{" "}
                      </div>
                    );
                  })}
                </div>
                <div className="text-black" key={index}>
                  imDB Rating: {movie.imdbRating}
                </div>
                <div className="text-black" key={index}>
                  imDB Votes: {movie.imdbVotes}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
