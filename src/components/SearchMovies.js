import React from 'react'

export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("Serch Movies")

        const myapi = 'ccdf49e24b52698a57b456421eb065bc'
        const query = "The Lion King"


        const url = `https://api.themoviedb.org/3/search/movie?api_key=${myapi}&language=en-US&query=${query}&page=1&include_adult=false`

        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)


        }
        catch(err){
            console.log(err)
        }
       
    }

    return(
        <div>
            <form className="form" onSubmit= {searchMovies}>
                <label className="label" htmlFor="query">Movie Name:  <br/>
                    <input className="input"  type="text" name="query" placeholder="Seach Movies" />
                    <br/>

                    <button className="button" type="submit">Search</button>
                </label>
            </form>
        </div>
    )
}