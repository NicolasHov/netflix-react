
const MovieCard = (props) => {
  const totalVotes = props.movie.likes + props.movie.dislikes
  const levelBarStyle = { width:'5rem', height:'10px', border: '1px solid black' }
  const levelLikesStyle = { width:`${props.movie.likes/totalVotes*100}%`, height:'100%', backgroundColor: 'red' }

  const cardMovieStyle = { width:'8rem', height:'6rem', border: '1px solid black', margin: '1rem' }
  return (
    <div style={cardMovieStyle}>
      <div>title :{props.movie.title}</div>
      <div>category :{props.movie.category}</div>
      <div style={levelBarStyle}>
        <div style={levelLikesStyle}></div>
      </div>
      <br></br>
    </div>
  );
}

export default MovieCard;