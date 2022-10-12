//import link
import { Link } from 'react-router-dom';

//import constants
import { imgURL } from '../constants';

function Movie({ data: { id, title, poster_path, vote_average }, similar }) {
  return (
    <div className=' cursor-pointer '>
      {/* movie card */}
      <Link to={`/movie/${id}`}>
        <div className='relative w-full'>
          <img
            src={imgURL + poster_path}
            alt='movie card'
            loading='lazy'
            className='w-full h-[400px]'
          />
          <div className=' absolute top-2 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500'>
            {Math.floor(vote_average * 10) / 10}
          </div>
        </div>
      </Link>
      {/* Title */}
      <div className=' p-5 text-center w-full'>
        <Link to={`/movie/${id}`}>
          <h3 className=' text-lg text-black font-semibold hover:text-Gray'>
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Movie;
