//import hooks
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
//import components
import Movie from './Movie';

//import constants
import { API_KEY, BASE_URL } from '../constants';

function SearchFeed() {
  //get search query
  const { searchTerm } = useParams();

  //getting movies
  const [movies] = useAxios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm.toLowerCase()}&page=1&include_adult=false`
  );
  return (
    <main>
      <div className=' mt-[45px] md:mt-[84px]'>
        {/* category title */}
        <h2 className=' text-center text-2xl font-bold text-black'>
          {' '}
          You searched for: {searchTerm}
        </h2>

        {/* Movies list container */}

        <div className=' grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 py-[23px] gap-x-[21px] gap-y-10 '>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default SearchFeed;
