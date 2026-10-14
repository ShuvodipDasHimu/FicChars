import React from "react";
import { TypeAnimation } from "react-type-animation";

const favorites = [
  {
    name: "Sosuke Aizen",
    alt: "Aizen Sosuke",
    image: "https://i.postimg.cc/vB78qfqd/fav3aizen.webp",
    accent: "border-purple-500/40 hover:bg-purple-500/10",
    text: "text-purple-500",
  },
  {
    name: "Itachi Uchiha",
    alt: "Itachi Uchiha",
    image: "https://i.postimg.cc/W3cbwX7n/fav3itachi.webp",
    accent: "border-red-500/40 hover:bg-red-500/10",
    text: "text-red-500",
  },
  {
    name: "Roronoa Zoro",
    alt: "Roronoa Zoro",
    image: "https://i.postimg.cc/Pqw5DB1J/fav3zoro.webp",
    accent: "border-green-500/40 hover:bg-green-500/10",
    text: "text-green-500",
  },
];

const FavThree = () => {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <h1 className="mb-8 text-center text-2xl font-bold text-base-content sm:mb-12 sm:text-3xl">
        My Fav 3 Characters out of the Big 3 Anime
      </h1>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {favorites.map((fav) => (
          <div
            key={fav.name}
            className={`flex flex-col items-center rounded-2xl border bg-base-200 px-4 py-8 shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03] sm:px-8 sm:py-10 ${fav.accent}`}
          >
            <img
              className="h-64 w-full max-w-xs rounded-lg object-cover shadow-lg sm:h-[350px]"
              src={fav.image}
              alt={fav.alt}
            />
            <TypeAnimation
              sequence={[fav.name, 1600, "", 700]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={`mt-4 text-2xl font-mono sm:text-3xl ${fav.text}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavThree;
