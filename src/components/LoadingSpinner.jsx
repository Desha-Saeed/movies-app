import React from 'react';

function LoadingSpinner() {
  return (
    <div className=' flex justify-center items-center h-[400px]'>
      <div className=' w-[100px] h-[100px] border-[10px] border-lightGray border-t-[10px] border-t-red-900 rounded-[50%] animate-spin ' />
    </div>
  );
}

export default LoadingSpinner;
