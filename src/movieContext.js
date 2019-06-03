import React, {useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies]= useState([
        {
            name:"Chekkasevantha Vanam",
            price:"$700",
            id:123
        },
        {
            name:"Katrin Mozhi",
            price:"$500",
            id:143
        },  {
            name:"Vinnai Thandivaruvaya",
            price:"$300",
            id:163
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}