import React from "react";
import { Link } from "react-router";
import FavThree from "../components/FavThree";

const Home = () => {
  return (
    <div className="space-y-8 sm:space-y-16">
      <div
        className="hero min-h-[70vh] sm:min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/wM3mxsYJ/AIZEN-LOCK.jpg)",
        }}
      >
        <div className="hero-overlay bg-black/60"></div>
        <div className="hero-content px-4 text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold sm:text-5xl">Hello there</h1>
            <p className="mb-5 text-sm sm:text-base">
              Welcome! This is a passion project of mine where I will showcase
              some of my personal favorite fictional characters! <br />
              Hopefully you have great taste in fictional characters just like I
              do! <br /> Enjoy!
            </p>
            <Link to="/animechars" className="btn btn-outline text-neutral-content">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <FavThree />
    </div>
  );
};

export default Home;
