import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const FavThree = () => {
  return (
    <div className=" py-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">My Fav 3 Characters out of the Big 3 Anime</h1>
      <div className="flex gap-16 items-center justify-center flex-wrap">
        <div className="flex flex-col items-center py-10 px-8  rounded-2xl shadow-xl hover:bg-purple-100 hover: bg-purple-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-80 h-[350px] rounded-lg shadow-lg"
            src="https://i.postimg.cc/vB78qfqd/fav3aizen.webp"
            alt="Aizen Sosuke"
          />
          <TypeAnimation
            sequence={[
              'Sosuke Aizen',
              1600,
              '',
              700,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-3xl font-mono text-purple-600"
          />
        </div>
        <div className="flex flex-col items-center py-10 px-8  rounded-2xl shadow-xl hover:bg-red-100 bg-red-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-80 h-[350px] rounded-lg shadow-lg"
            src="https://i.postimg.cc/W3cbwX7n/fav3itachi.webp"
            alt="Itachi Uchiha"
          />
          <TypeAnimation
            sequence={[
              'Itachi Uchiha',
              1600,
              '',
              700,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-3xl font-mono text-red-600"
          />
        </div>
        <div className="flex flex-col items-center py-10 px-8  rounded-2xl shadow-xl hover:bg-green-50 bg-green-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-80 h-[350px] rounded-lg shadow-lg"
            src="https://i.postimg.cc/Pqw5DB1J/fav3zoro.webp"
            alt="Roronoa Zoro"
          />
          <TypeAnimation
            sequence={[
              'Roronoa Zoro',
              1600,
              '',
              700,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-3xl font-mono text-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default FavThree;