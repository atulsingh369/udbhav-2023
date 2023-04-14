import React from "react";

const SponsersGallery = () => {
  return (
    <>
      <div className=" flex flex-row gap-5 bg-base-100 w-full items-center justify-center p-5 overflow-y-scroll">
        <h1 className="text-2xl text-white font-semibold tracking-widest">
          Event Sponsers
        </h1>
        <div className="carousel-item p-5 border-4  border-white rounded-full">
          <img
            src="/"
            className="rounded-full object-cover w-32 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300"
          />
        </div>
        <div className="carousel-item p-5 border-4  border-white rounded-full">
          <img
            src="/"
            className="rounded-full object-cover w-32 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300"
          />
        </div>
        <div className="carousel-item p-5 border-4  border-white rounded-full">
          <img
            src="/"
            className="rounded-full object-cover w-32 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300"
          />
        </div>
        <div className="carousel-item p-5 border-4  border-white rounded-full">
          <img
            src="/"
            className="rounded-full object-cover w-32 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default SponsersGallery;
