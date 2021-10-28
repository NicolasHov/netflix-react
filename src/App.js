import './App.css';
import React from 'react' 
import MovieCard from './MovieCard'
import movies from './movies'

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      movies: movies, 
      copyMovie: [] }
  }

  render() {
    return (
      <div className="list-movies">
        {this.state.movies.map(movie => {
          return(
            <MovieCard movie={movie} />
          )
        })}
      </div>
  )}
}

export default App;
