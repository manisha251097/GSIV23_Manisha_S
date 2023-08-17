import "./App.css";
import React,{useEffect} from "react";
import MovieCard from "./Component/MovieCard";
import {useDispatch,useSelector} from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { loadMovieList } from "./Redux/Action";

function App() {

  const dispatch= useDispatch();
  const { movieListData } =
    useSelector((state) => state.data);

    useEffect(() => {
      dispatch(loadMovieList());
   
  
    }, []);

    console.log(movieListData,"movieListData")
  

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "7% 93%", height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
        
          boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.1)",
          padding:"20px",
          justifyContent:"space-between",
          alignItems:"center"
        }}
      >
        <div>
          <input 
           type="text"
            placeholder="Search"
            style={{
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width:"300px",
              backgroundColor:"#DFDFDF"
            }}
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
        {movieListData.map((x) => {
          return <MovieCard data={x}/>;
        })}
      </div>
    </div>
  );
}

export default App;
