import { useEffect , useState} from 'react' ;

const Moviedetail = ({movie}) => {
    // const [movie, setMovie] = useState(null);

    // useEffect(() => {
    //     const stored = localStorage.getItem('selectedMovie') ;
    //     if(stored){
    //         setMovie(JSON.parse(stored)) ;
    //     }
    // },[])
    
    if(!movie) return <p id = "loading_detal"> loading...</p>

    return(
    <div className="movie-detail">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} width= "200px" loading="lazy" className = "movie-poster"/>
      <div className = "text-box">
        <h2 className = "movie-title">{movie.original_title}</h2>
        <p className = "rating">Rating: {movie.vote_average}</p>
    
        <p className = "Ryear">Release Year: {new Date(movie.release_date).getFullYear()}</p>
        <div className = "overview-box">
          <p>Overview:</p>
          <p className = "overview">{movie.overview}</p>
        </div>
      </div>
    </div>
 
    )
}

export default Moviedetail;