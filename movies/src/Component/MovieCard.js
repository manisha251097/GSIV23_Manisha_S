import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({data}) => {
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const fullImageUrl = baseImageUrl + data?.backdrop_path;
const history = useNavigate();

const handleCardClick=()=>{
    history(`/moviedetails/${data?.id}`)
  


}
  return (
    <>
      <div
        style={{
          margin: "20px",
          height: "300px",
          borderRadius: "10px",
          display: "grid",
          gridTemplateRows: "65% 35%",
          boxShadow: "6px 6px 6px 1px rgba(0, 0, 0, 0.1)",
          cursor:"pointer"

        }}
        onClick={()=>{handleCardClick()}}
      >
        <div style={{backgroundColor:"#DFDFDF",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}><img style={{ width: "100%", height: "100%", objectFit: "cover",borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} alt="Movie Poster" src={fullImageUrl} /></div>
        <div style={{padding:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{fontWeight:"600"}}>{data?.original_title}</div>
                <div style={{fontWeight:"600"}}>{data?.vote_average}</div>
            </div>
            <div style={{paddingTop:"5px",fontSize:"14px"}}>{data?.overview.substring(0,50)}...</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
