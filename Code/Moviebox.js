import { useEffect, useState} from "react" ;
import { useNavigate } from 'react-router-dom';

const MovieBox = ({page = 1}) => {
    const [movies, setMovies] = useState([]) ;
    const navigate = useNavigate();
    const[loaded, setLoaded] = useState(false) ;
    const [loadingStates, setLoadingStates] = useState({
    1: true,
    2: true,
    3: true,
    });

    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const res = await fetch(`https://jsonfakery.com/movies/paginated?page=${page}`);
                const data = await res.json() ;
                const sorted = [...data.data].sort((a,b) => b.vote_average - a.vote_average) ;
                const topSeven = sorted.slice(0,6) ;
                setMovies(topSeven) ;
            } catch(err){
                console.log("Fecth failed", err) ;
            } finally{
                setLoadingStates(prev => ({ ...prev, [page] : false})) ;
            }
        }
        fecthMovies() ;
    },[page])

    const handleClick = (movie) => {
        const movieWithPage = { ...movie, page}
        localStorage.setItem('selectedMovie', JSON.stringify(movieWithPage)) ;
        navigate('/details') ;
    }

    return(
       <div className = "movie-box"
       style={{ display: 'flex', flexDirection: 'row' }}>
        {loadingStates[page] ? [...Array(6)].map( (_,i) => (
        <div key={i} className="movie-card skeleton">
            <div className="skeleton-image" />
            <div className="skeleton-line short" />
            <div className="skeleton-line" />
        </div>
        )) 
        : movies.map((movie) => (
            <div className = "movie-card"
             key = {movie.id} 
             onClick = {() => handleClick(movie)}
             style={{ display: 'flex', flexDirection: 'column' }}
            >
                {/* <img src={`https://image.tmdb.org/t/p/w5${movie.poster_path}`} alt={movie.original_title} width="100" loading="lazy"/> */}
                <div className="image-container">
                        <img
                            loading="lazy"
                            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                            alt={movie.original_title}
                            onLoad={() => setLoaded(true)}
                            className={loaded ? 'loaded' : 'loading'}
                        />
                </div>

                <h3 className = "movie-name">{movie.original_title}</h3>
                <p className = "year">{new Date(movie.release_date).getFullYear()}</p>
             </div>
        ))}
       </div>
    )
}

export default MovieBox ;