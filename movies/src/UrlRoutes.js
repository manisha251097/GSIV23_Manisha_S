import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { Routes } from "react-router-dom";
import App from "./App";
import MovieDetails from "./Component/MovieDetails";



export default function UrlRoutes() {

  return (
    <StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
        
          
        </Routes>
      </Provider>
    </StrictMode>
  );
}