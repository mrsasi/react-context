import React,{useState, useContext} from 'react';
import "./App.css";
import Movie from './movie';
import { MovieContext } from './movieContext';


const MoviesList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div>
          {movies.map(movie=>(
             <Movie name={movie.name} prise={movie.price} key={movie.id}/>
          ))}
        </div>
    );
}




export default MoviesList;