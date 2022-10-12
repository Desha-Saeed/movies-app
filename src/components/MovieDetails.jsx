//import hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import components
import MovieVideo from './MovieVideo';
import Genre from './Genre';
//import packages and constants
import axios from 'axios';
import { API_KEY, imgURL, BASE_URL } from '../constants';
import LoadingSpinner from './LoadingSpinner';
import SimilarMovies from './SimilarMovies';

function MovieDetails() {
  //the movie id
  const { id } = useParams();
  //movie detauls state
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`
              ${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

      setMovieDetail(response.data);
    };

    fetchMovie();
  }, [id]);

  //error handling
  if (!movieDetail) return <LoadingSpinner />;

  const { genres, title, poster_path, overview, vote_average } = movieDetail;

  return (
    <>
      <main className=' mt-[45px] overflow-hidden md:mt-[84px] flex flex-col items-center lg:flex-row gap-[50px] bg-lightGray lg:h-screen'>
        <div className=' w-full h-[80%]'>
          {/* Title */}
          <div className=' py-[10px]  '>
            <h3 className=' text-center lg:text-left text-2xl font-bold text-black  '>
              {title}
            </h3>
          </div>
          {/* Flex Container */}
          <div className=' flex flex-col items-center lg:flex-row gap-[40px]'>
            {/* Poster image */}
            <div className='mb-[40px] w-full h-full lg:w-[40%]   flex justify-center lg:justify-start]'>
              <img
                src={imgURL + poster_path}
                alt='movie card'
                loading='lazy'
              />
            </div>
            {/* Genres container */}
            <div className='flex w-full flex-col items-center  '>
              <div className='flex items-start justify-center flex-wrap gap-[20px] mb-[30px]'>
                {/* Genres items */}
                {genres.map((genre) => (
                  <Genre
                    genre={genre}
                    key={genre.id}
                  />
                ))}
              </div>
              {/* MOVIE OVERVIEW */}
              <div className=' '>
                <h3 className=' text-xl text-black leading-loose   '>
                  {overview}
                </h3>
              </div>

              {/* Ratings and Reviews container */}
              <div className=' flex gap-y-[50px] gap-x-[15px]'>
                {/* IMDB RATINGS container */}
                <div className=' flex flex-col items-center gap-1 mt-[54px]'>
                  <span className=' font-bold text-lg'>IMDB Rating</span>
                  <span className=' text-md font-semibold'>
                    ⭐{Math.round(vote_average * 10) / 10}/10{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full h-full lg:w-[75%]'>
          <MovieVideo id={id} />
        </div>
      </main>

      <SimilarMovies id={id} />
    </>
  );
}

export default MovieDetails;
