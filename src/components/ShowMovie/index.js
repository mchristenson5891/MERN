import React, { Component } from 'react'

class ShowMovie extends Component {
    async componentDidMount() {
        const movieId = this.props.match.params.id
        const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
        const movieJson = await resMovie.json()
        console.log(movieJson)
    }
    render() {
        return (
            <div>
                Show Movie
            </div>
        )
    }
}

export default ShowMovie