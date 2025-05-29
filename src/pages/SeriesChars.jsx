import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SeriesChars = () => {
  const [seriesChars, setSeriesChars] = useState([]);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // axios
    axios.get('/characters.json')
    .then(res=>{
      // console.log(res.data.categories);
      const favSeriesChars = res.data.categories.series;
      setSeriesChars(favSeriesChars);
      // console.log(seriesChars);
    })
    .catch(err=>{
      console.error(err);
    })
    // change text color on dark theme
    useEffect(()=>{
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setIsDarkTheme(currentTheme === 'dark');
    }, []);
  return (
     <div className='mt-2 p-2 border-transparent'>
      {seriesChars && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {seriesChars.map((indChars)=><div className='shadow-lg flex flex-col items-center gap-4 border-2 border-slate-200 rounded-lg bg-slate-200 p-12 hover:translate-2 hover:cursor-pointer'>
        <div className='p-4 rounded-lg'>
          <img className='w-[200px] rounded-lg' src={indChars.appearance.image_url} alt="" />
        </div>
        <div className={isDarkTheme ? "text-white" : "text-black"}>
          <h1>Name: {indChars.name}</h1>
          <h1>Anime: {indChars.series}</h1>
          <h1>Aliases: {indChars.aliases[0]}</h1>
        </div>
      </div>)}
      </div>}
    </div>
  );
};

export default SeriesChars;