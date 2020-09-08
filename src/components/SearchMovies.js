import React, { useState } from 'react'
import '../css/SearchMovies.css'
import MovieCard from './movieCard'


export default function SearchMovies() {


    //react hooks

    //states - input query

    const [query, setQuery] = useState('')

    //create the state for movies and update the state appropraite

    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("Serch Movies")

        const myapi = 'ccdf49e24b52698a57b456421eb065bc'
        // const query = ""


        const url = `https://api.themoviedb.org/3/search/movie?api_key=${myapi}&language=en-US&query=${query}&page=1&include_adult=false`

        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            
            setMovies(data.results)


        }
        catch(err){
            console.log(err)
        }
       
    }

    return(
        <>

<form className="form" onSubmit= {searchMovies}>
                <label className="label" htmlFor="query">Movie Name:  <br/>
                    <input className="input"  type="text" name="query" placeholder="Seach Movies"  value= {query}  onChange={(e) =>setQuery(e.target.value)}/>
                    
                    <br/>
                    <br/>

                    <button className="button" type="submit">Search</button>
                </label>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => 
                    (
                        <MovieCard movie= {movie} key= {movie.id}/>


                    )
                        )}
            </div>
        </>
    )
}