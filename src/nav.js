import React, {useContext} from "react";
import "./App.css";
import { MovieContext } from "./movieContext";

const Nav = () => {
const [movies, setMovies]= useContext(MovieContext);

  return (
      <div className="Navbar">
        <h3>Sasi Liked Movies</h3>
        <p>List of movies : {movies.length}</p>
      </div>
  );
};

export default Nav;
