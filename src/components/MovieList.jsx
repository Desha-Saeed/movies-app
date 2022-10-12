//import component
import Movie from './Movie';

//import constants
import { API_KEY, BASE_URL } from '../constants';
import LoadingSpinner from './LoadingSpinner';
import useAxios from '../hooks/useAxios';

function MovieList() {
  //using the axios hook
  const [movies, loading] = useAxios(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  console.log(movies);
  return (
    <main>
      <div className=' mt-[45px] md:mt-[84px]'>
        {/* category title */}
        <h2 className=' text-center text-2xl font-bold text-black'>
          {' '}
          Popular movies
        </h2>

        {/* Movies list container */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className=' grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 py-[23px] gap-x-[21px] gap-y-10 '>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                data={movie}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MovieList;
