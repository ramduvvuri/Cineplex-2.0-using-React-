import  Moviedetail from './Moviedetail';
import Castdisplay from './Castdisplay';

const Details = () => {
  const stored = localStorage.getItem('selectedMovie');
  const movie = stored ? JSON.parse(stored) : null;

  if (!movie) return <p>No movie selected.</p>;

  return (
    <div>
    <Moviedetail movie = {movie}/>
      <h3 id = "cast-title">Cast</h3>
    <Castdisplay movie={movie}/>
    </div>
  );
  
  console.log("Hello world")
};

export default Details;