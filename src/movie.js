import React from 'react';
import "./App.css";

const Movie = Sasi => {
    return(
        <div>
        <h3>{Sasi.name}</h3>
        <p>{Sasi.prise}</p>
        </div>
    );
}

export default Movie;