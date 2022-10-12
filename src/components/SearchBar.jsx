import React, { useRef, useState } from 'react';
//import navigate
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleChange = () => {
    setSearchTerm(searchRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form
      className=' w-full mt-3 md:mt-0 md:w-[30%]'
      onSubmit={handleSubmit}>
      <input
        ref={searchRef}
        type='text'
        placeholder='search movies'
        value={searchTerm}
        className=' w-full bg-Gray p-3 rounded-3xl outline-1  text-black text-center  mt-8 md:mt-0'
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
