import React from "react";
import "./App.css";
import MoviesList from "./movieslist";
import Nav from "./nav";
import { MovieProvider } from "./movieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
