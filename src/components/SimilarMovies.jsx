//import hooks

import useAxios from '../hooks/useAxios';

//import componenets
import LoadingSpinner from './LoadingSpinner';
import Movie from './Movie';
//import constants
import { BASE_URL, API_KEY } from '../constants';

function SimilarMovies({ id }) {
  const [movies, loading] = useAxios(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );

  const slicedMovies = movies.slice(0, 3);

  return (
    <section className=' mt-[30px] lg:mt-[80px]'>
      {/* Title */}
      <div className='text-center p-5'>
        <p className=' text-2xl font-bold '>Similar movies you might like:</p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-[21px] gap-y-10'>
          {slicedMovies.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SimilarMovies;
