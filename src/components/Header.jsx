//import componenets
import SearchBar from './SearchBar';
//import Link
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className=' flex flex-col justify-between md:flex-row items-center'>
      {/* Logo */}
      <Link to={'/'}>
        <h1 className=' text-[35px] font-bold cursor-pointer'>Movies Site</h1>
      </Link>

      {/* Search bar */}
      <SearchBar />
    </nav>
  );
}

export default Header;
