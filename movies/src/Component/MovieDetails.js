import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { loadMovieDetails } from "../Redux/Action";

function MovieDetails() {
  const currentPath = window.location.pathname;
  const parts = currentPath.split("/");
  const id = parts[parts.length - 1];

  const dispatch = useDispatch();
  const { movieDetailsData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadMovieDetails(id));
  }, []);

  console.log(movieDetailsData, "movieDetailsData");
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const fullImageUrl = baseImageUrl + movieDetailsData?.backdrop_path;

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "7% 93%", height: "100vh" }}
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
        <div style={{ fontWeight: "600" }}>MOVIE DETAILS</div>
        <div>
     
          <HomeIcon />
        </div>
      </div>

      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "30% 70% ",
        }}
      >
        <div style={{height:"300px"}} >
          <img
            style={{
              width: "90%",
              height: "80%",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            alt="Movie Poster"
            src={fullImageUrl}
          />
        </div>
        <div style={{margin:"10px"}}>
            <div style={{marginTop:"10px",fontWeight:"700"}}>{movieDetailsData?.original_title}  ({movieDetailsData?.vote_average})</div>
            <div style={{marginTop:"10px",fontWeight:"600"}}>{movieDetailsData?.release_date?.split("-")[0]} | {movieDetailsData?.runtime} minutes</div>
            
            <div style={{marginTop:"10px"}}>Description: {movieDetailsData?.overview}</div>
            
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
