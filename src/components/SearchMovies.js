import React, { useState } from 'react'
import '../css/SearchMovies.css'


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
                        <div className="card" key={movie.id}>
                            <img className="card--image" src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + 'poster'} />
                        
                            <div className="card--content">
                                <h3 className="card--title">{movie.title}</h3>
                                <p><small>Release Date: { movie.release_date}</small></p>
                                <p><small>Rating: { movie.vote_average}</small></p>
                                 <p className="card--description">{movie.overview}</p>
                            </div>
                        
                        </div>


                    )
                        )}
            </div>
        </>
    )
}