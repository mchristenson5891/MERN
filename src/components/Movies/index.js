import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { MOVIES } from '../../constants/routes'

class Movies extends Component {
    state = {
        movies: [],
        search: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async componentDidMount() {
        console.log(process.env)
        const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=fight%20club&page=1&include_adult=false`)
        const moviesJson = await movies.json()
        console.log(moviesJson)
        this.setState({
            movies: moviesJson.results
        })
    }

    doGetMovie = async () => {
        const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
        const moviesJson = await movies.json()
        this.setState({
            movies: moviesJson.results
        })
    }

    render() {
        return (
            <div>
                hello i am a movie component.
                <input 
                    name='search' 
                    value={this.state.search} 
                    placeholder='Find a movie'
                    onChange={this.handleChange}
                />
                <button onClick={this.doGetMovie}>Search for Movie</button>
                {
                    this.state.movies.map(m => 
                        <div>
                            <h3>{m.title}</h3>
                            <Link to={`${MOVIES}/${m.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}/>
                            </Link>
                        </div>  
                    )
                }
            </div>
        )
    }
}

export default Movies