import './App.css';
import React from 'react' 
import MovieCard from './components/MovieCard'
import movies from './movies'

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      movies: movies, 
      copyMovie: [] }
  }


  render() {
    const listMoviesStyle = { display: 'flex', flexWrap: 'wrap',
    justifyContent: 'space-between' }
    return (
      <div style={listMoviesStyle}>
        {this.state.movies.map(movie => {
          return(
            <MovieCard movie={movie} />
          )
        })}
      </div>
  )}
}

export default App;
