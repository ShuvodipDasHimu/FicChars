import React from "react";
import FavThree from "../components/FavThree";

const Home = () => {
  return (
    <>
    <div className="space-y-16">
      <div
      className="hero min-h-screen shadow-2xl"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/wM3mxsYJ/AIZEN-LOCK.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome! This is a passion project of mine where I will showcase some of my personal favorite fictional characters! Hopefully you have great taste in fictional characters just like I do! <br /> Enjoy!
          </p>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
      </div>
      <FavThree></FavThree>
    </div>
    </>
  );
};

export default Home;
