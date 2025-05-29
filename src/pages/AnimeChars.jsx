import axios from 'axios';
import React, { useState } from 'react';

const AnimeChars = () => {
  const [animeChars, setAnimeChars] = useState([]);
  // axios
  axios.get('/characters.json')
  .then(res=>{
    // console.log(res.data.categories);
    const favAnimeChars = res.data.categories.anime;
    setAnimeChars(favAnimeChars);
    // console.log(animeChars);
  })
  .catch(err=>{
    console.error(err);
  })
  return (
    <>
    <div className='max-w-5/6 mx-auto'>
      {animeChars && <div className='grid grid-cols-2 gap-6'>
      {animeChars.map((indChars)=><div className='shadow-lg flex items-center gap-4'>
        <div>
          <img className='w-[200px] rounded-lg' src={indChars.appearance.image_url} alt="" />
        </div>
        <div>
          <h1>{indChars.name}</h1>
        </div>
      </div>)}
      </div>}
    </div>
    </>
  )
};

export default AnimeChars;