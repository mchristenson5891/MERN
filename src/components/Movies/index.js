import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MOVIES } from '../../constants/routes'
const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=`;


const Movies = () => {
const [data, setData] = useState();
console.log(data)
    // useEffect(() => {
    //     const movies = await doGetMovies()
    // }, [])
useEffect(() => {
   doGetMovies()
    // setData(result.data);
}, []);

const doGetMovies = async () => {
        // this.setState({ loading: true })
        try {
            const movies = await(await fetch(`${API}up`)).json()
            console.log(movies)
            // setTimeout(() => this.setState({
            //     movies: movies.results,
            //     loading: false
            // }), 3000)
        } catch(error) {
            console.log(error)
            // this.setState({
            //     error,
            //     loading: false
            // })
        }
    }
        return (
            <div>
                hello
            </div>
        )
}

// class Movies extends Component {
//     state = {
//         movies: [],
//         search: 'fight club',
//         loading: true,
//         error: ''
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     componentDidMount() {
//         this.doGetMovies()
//     }

//     doGetMovies = async () => {
//         this.setState({ loading: true })
//         try {
//             const movies = await(await fetch(`${API}${this.state.search}`)).json()
//             setTimeout(() => this.setState({
//                 movies: movies.results,
//                 loading: false
//             }), 3000)
//         } catch(error) {
//             this.setState({
//                 error,
//                 loading: false
//             })
//         }
//     }

//     render() {
//         const { movies, loading, error } = this.state

//         if (error) {
//             return <p>{error.message}</p>;
//         }

//         if (loading) {
//             return <p>Loading ...</p>;
//         }
      
//         return (
//             <div>
//                 hello i am a movie component.
//                 <input 
//                     name='search' 
//                     value={this.state.search} 
//                     placeholder='Find a movie'
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.doGetMovies}>Search for Movie</button>
//                 {
//                     movies.map(m => 
//                         <div>
//                             <h3>{m.title}</h3>
//                             <Link to={`${MOVIES}/${m.id}`}>
//                                 <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}/>
//                             </Link>
//                         </div>  
//                     )
//                 }
//             </div> 
//         )
//     }
// }

export default Movies