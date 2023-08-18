import "./App.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./Component/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { loadMovieList, loadSearchmovies } from "./Redux/Action";
import MovieList from "./Component/MovieList";
import SearchMovie from "./Component/SearchMovie";
import { IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { movieListData, searchmovieData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadMovieList());
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      dispatch(loadMovieList()); 
    }
  }, [searchQuery, dispatch]);

  const handleSearchSubmit = (value) => {
    setSearchQuery(value)
    // if (searchQuery) {
      dispatch(loadSearchmovies(value));
    // }
  };

  const handleClear = () => {
    setSearchQuery(""); 
    dispatch(loadSearchmovies());

  };

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "9% 91%", height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="clear search"
                  onClick={handleClear}
                  size="small"
                >
                  <ClearIcon />
                </IconButton>
              ),
              style: {
                backgroundColor: "#DFDFDF",
                height: "32px",
              },
            }}
            style={{
              width: "300px",
            }}
            value={searchQuery}
            onChange={(e) => handleSearchSubmit(e.target.value)}
          />
        
        </div>
        <div>
          <HomeIcon />
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto ",
        }}
      >
        {searchmovieData.length > 0 ? (
          <SearchMovie results={searchmovieData} />
        ) : (
          <MovieList movies={movieListData} />
        )}
      </div>
    </div>
  );
}

export default App;
