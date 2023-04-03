import React from "react";

const TourCarosuel = () => {
  return (
    <>
      <section className="w-full  flex flex-row justify-center ">
        <div className="carousel w-11/12 ">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/CheifGuest.png?updatedAt=1680503388032"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/CheifGuest.png?updatedAt=1680503388032"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/CheifGuest.png?updatedAt=1680503388032"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/CheifGuest.png?updatedAt=1680503388032"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
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
