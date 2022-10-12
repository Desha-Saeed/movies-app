//import custon hooks
import useAxios from '../hooks/fetchMovies';
//import Youtube player
import Youtube from 'react-youtube';

function MovieVideo({ id }) {
  //using the axios hook
  const [movies] = useAxios(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=83bb0197d09b188a6534b4146549960a&language=en-US`
  );

  //get the trailer item if the video exists and it includes a trailer
  const getTrailerId = (results) => {
    const trailer = results.find(
      (video) => video && video.name.includes('Trailer')
    );
    return trailer;
  };

  //grab the trailer Id
  const trailerId = getTrailerId(movies);

  //options for react player
  const opts = {
    width: '100%',
    height: '400px'
  };
  return (
    <div className=' h-screen w-full pt-5 lg:pt-[100px]'>
      {trailerId ? (
        // Display if trailer exists
        <Youtube
          videoId={trailerId.key}
          opts={opts}
          className=' rounded-full mb-[70px]'
        />
      ) : (
        //   Display if there is no trailer
        <div className=' w-full h-[50%] flex justify-center items-center pt-5 lg:pt-[100px]'>
          <p className=' font-bold text-xl text-red-400'>
            This movies has no trailer
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieVideo;
