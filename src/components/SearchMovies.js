import React from 'react'

export default function SearchMovies() {

    return(
        <div>
            <form className="form">
                <label className="label" htmlFor="query">Movie Name:  <br/>
                    <input className="input"  type="text" name="query" placeholder="Seach Movies" />
                    <br/>

                    <button className="button" type="button">Search</button>
                </label>
            </form>
        </div>
    )
}