import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='mt-[50px] '>
      <div className=' flex flex-col lg:flex-row justify-center items-center '>
        {/* Logo */}
        <Link to={'/'}>
          <h1 className=' text-[35px] font-bold cursor-pointer'>Movies Site</h1>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
