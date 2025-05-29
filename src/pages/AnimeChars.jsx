import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AnimeChars = () => {
  const [animeChars, setAnimeChars] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
  // change text color on dark theme
  useEffect(()=>{
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsDarkTheme(currentTheme === 'dark');
  }, []);
  
  return (
    <>
    <div className='mt-2 p-2 border-transparent'>
      {animeChars && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {animeChars.map((indChars)=><div className='shadow-lg flex flex-col items-center gap-4 border-2 border-slate-200 rounded-lg bg-slate-200 p-12 hover:translate-2 hover:cursor-pointer'>
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

    {/* 
    "id": "anime_003",
        "name": "Ryuga Kishatu",
        "series": "Beyblade: Metal Fusion",
        "role": "Anti-Hero",
        "aliases": ["Dragon Emperor"],
        "appearance": {
          "description": "White hair, red jacket, intense eyes, carries L-Drago.",
          "image_url": "https://i.postimg.cc/tgnSpCbY/ryuga.webp"
        },
        "personality": {
          "traits": ["Lone wolf", "Ruthless", "Ambitious"],
          "moral_alignment": "Chaotic Neutral",
          "motivations": "Dominate Beyblade battles."
        },
        "abilities": {
          "skills": ["L-Drago Beyblade", "Dark power"],
          "power_level": 7,
          "signature_move": "Dragon Emperor Soaring Bite Strike"
        },
        "backstory": {
          "history": "Possessed by L-Drago's dark power, seeks ultimate strength.",
          "key_moments": ["Defeated Gingka", "Sacrificed L-Drago"],
          "affiliations": ["Dark Nebula (formerly)"]
        },
        "stats": {
          "strength": 8,
          "intelligence": 6,
          "speed": 7,
          "charisma": 4
        },
        "quotes": [
          "I am the ultimate blader!",
          "L-Drago will crush you!"
        ],
        "fun_facts": ["Obsessed with dragons", "Hates teamwork"],
        "project_hooks": {
          "tags": ["beyblader", "anti-hero", "dark"],
          "popularity_score": 70,
          "what_if_scenario"
     */}
    </>
  )
};

export default AnimeChars;