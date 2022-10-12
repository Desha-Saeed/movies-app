//import components
import { Header, MovieList, MovieDetails, SearchFeed } from './components';
//import routiers
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='px-12 py-5 bg-lightGray'>
      {/* Header */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<MovieList />}
          />
          <Route
            path='/movie/:id'
            exact
            element={<MovieDetails />}
          />
          <Route
            path='/search/:searchTerm'
            exact
            element={<SearchFeed />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
