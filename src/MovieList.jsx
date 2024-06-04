import movies from "./data/movies";

export function MoviesList() {
  return (
    <div>
      <div className="flex flex-col gap-[2rem] m-[2rem] items-center justify-center">
        {movies.map((movie, index) => {
          return (
            <div
              className="flex flex-row box-border justify-center gap-4 p-[1rem] w-[23rem] h-fit rounded-lg bg-white shadow-xl"
              key={index}
            >
              <img
                src={movie.image}
                alt="movie-image"
                className="w-[5rem] h-[5rem] rounded-[8px]"
              />
              <div className="flex flex-col text-left w-1/2 box-border">
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
                {/* <div className='' key={index}> {movie.genres.map((genre,index)=>{
                                return (
                                <div className='' key={index}>Genres: {genre[index]} </div>
                                )
                            })}</div> */}
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
