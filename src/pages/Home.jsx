import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  // const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log(user);
  // }, []);
  const navigate = useNavigate();
  return (
    <section className="bg-home-background bg-blend-soft-light bg-cover h-screen lg:h-screen pt-16 flex flex-col justify-between">
      <div className="carousel w-full lg:h-96  ">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-center bg-black"
        >
          <img
            src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner.jpg?updatedAt=1680522269752"
            className="w-full lg:w-1/2 "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative justify-center bg-black w-full"
        >
          <img
            src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner2.jpg?updatedAt=1680522535923"
            className="w-full lg:w-1/2"
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
          className="carousel-item relative justify-center bg-black w-full"
        >
          <img
            src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner3.jpg?updatedAt=1680524722184"
            className="w-full lg:w-1/2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-around gap-10  lg:mt-5">
        <div
          id="text-drop"
          className=" flex flex-row items-center justify-center p-5"
        >
          <div className="u text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            U
          </div>
          <div className="d text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            D
          </div>
          <div className="b text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            B
          </div>
          <div className="h text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            H
          </div>
          <div className="a text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            A
          </div>
          <div className="v text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
            V
          </div>
        </div>
        <div className="card w-96 image-full pb-20 lg:pb-0">
          <figure>
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/homeCard.png?updatedAt=1680669210627"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p className="font-bold text-lg text-justify text-white">
              Udbhav is a Sanskrit word that means "origin" or "source". It is
              often used in spiritual and philosophical contexts to refer to the
              ultimate source or cause of all existence
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => navigate("/tour")}
                className="btn glass text-white"
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
