import React from "react";

const TourCarosuel = () => {
  return (
    <>
      <section className="w-full    flex flex-row justify-center bg-base-100 pt-10 lg:pt-10 ">
        <div className="carousel lg:w-11/12 md:w-11/12">
          <div
            id="slide1"
            className="carousel-item relative w-full flex flex-row items-center justify-center"
          >
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner.jpg?updatedAt=1680522269752"
              className="lg:h-11/12 "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex flex-row items-center justify-center"
          >
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner2.jpg?updatedAt=1680522535923"
              className="lg:h-11/12"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full flex flex-row items-center justify-center"
          >
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner3.jpg?updatedAt=1680524722184"
              className="lg:h-11/12 md:h-96"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full flex flex-row items-center justify-center"
          >
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19faculty.jpg?updatedAt=1680525654666"
              className="lg:h-11/12 md:h-96"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourCarosuel;
