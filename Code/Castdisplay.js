import { useEffect, useState } from 'react';

const Castdisplay = ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (Array.isArray(movie?.casts)) {
        const sorted = [...movie.casts].sort((a, b) => b.popularity - a.popularity);
        setCast(sorted.slice(0, 7));
    } else {
      setCast([]);
    }
  }, [movie]);

  if (!cast.length) return <p>No cast info available.</p>;

  return (
    <div className="cast-list">
      {cast.map((member) => (
        <div key={member.id} className="cast-card">
          <img
            src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
            alt={member.original_name}
            width = "50px"
            loading="lazy"
            className = "cast-img"
          />
          <strong className = "cast-name">{member.original_name}</strong> 
          <p className = "cast-role">{member.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Castdisplay;