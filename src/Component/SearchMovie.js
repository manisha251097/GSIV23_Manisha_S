import React from "react";
import MovieCard from "./MovieCard";

const SearchMovie=({results})=>{
    return(
        <>
        {results.map((x) => {
          return <MovieCard data={x}/>;
        })}
        </>
    )
}

export default SearchMovie