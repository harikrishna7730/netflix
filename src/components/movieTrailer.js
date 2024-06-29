import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieTrailer = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1b7cf18b6164af94373d3e9878440394`);
        console.log(response.data)
        const trailer = response.data.results.find(video => video.type === 'Trailer');
        setTrailerUrl(trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : '');
        console.log(response.data.results )
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className="p-4">
      {trailerUrl ? (
        <iframe
          width="100%"
          height="500"
          src={trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
};

export default MovieTrailer;
