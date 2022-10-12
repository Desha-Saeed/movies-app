function Genre({ genre }) {
  return (
    <div className=' text-center py-[6px] px-[26px] border border-black rounded-[20px] hover:bg-black hover:text-white '>
      <span className=' text-lg text-inherit cursor-pointer font-[500] '>
        {genre.name}
      </span>
    </div>
  );
}

export default Genre;
