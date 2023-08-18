import React from "react";
import MovieCard from "./MovieCard";

const MovieList=({movies})=>{
    return(
        <>
        {movies.map((x) => {
          return <MovieCard data={x}/>;
        })}

        </>
    )
}

export default MovieList