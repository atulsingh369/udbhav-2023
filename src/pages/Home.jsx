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
    <section className="bg-home-background h-screen bg-blend-soft-light bg-cover ">
      <section className=" pt-24 md:pt-16 lg:pt-16  grid grid-cols-1 md:grid-cols-2">
        <div
          id="text-drop"
          className=" flex flex-row items-center justify-center p-5  "
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
        <div className="carousel lg:m-5   ">
          <div
            id="slide1"
            className="carousel-item relative w-full justify-center bg-black"
          >
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner.jpg?updatedAt=1680522269752"
              className="w-full  "
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
              className="w-full "
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
              className="w-full "
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
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-items-center">
        <div className="card w-96 mt-10 image-full ">
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
        <div
          id="scroll-container"
          className="flex flex-col items-start p-5 overflow-y-scroll   h-72 mt-10 "
        >
          <div id="scroll-text">
            <p
              id="paragraph"
              className="text-white text-xl font-semibold text-justify leading-10 mt-5
            "
            >
              Udbhav, the starting point of all, <br /> The seed from which we
              grow and stand tall. <br /> Our journey towards self-realization,{" "}
              <br /> Begins with this moment of initiation.
            </p>
            <p
              id="paragraph"
              className="text-white text-xl font-semibold text-justify leading-10 mt-5"
            >
              From the first breath we take, <br /> To every step that we make,{" "}
              <br /> Life's journey begins with a spark, <br /> A fire that
              ignites our inner mark.
            </p>
            <p
              id="paragraph"
              className="text-white text-xl font-semibold text-justify leading-10 mt-5"
            >
              Udbhav, the source of our being, <br /> A force that sets us on a
              path of seeing, <br /> The world in all its beauty and pain,{" "}
              <br /> And in this journey, we shall gain.
            </p>
            <p
              id="paragraph"
              className="text-white text-xl font-semibold text-justify leading-10 mt-5"
            >
              Wisdom, love, and understanding, <br /> The fruits of our soul's
              expanding, <br /> As we walk the path of our destiny, <br />{" "}
              Udbhav guides us to our ultimate harmony.
            </p>
            <p
              id="paragraph"
              className="text-white text-xl font-semibold text-justify leading-10 mt-5"
            >
              So let us embrace this starting point, <br /> And cherish every
              moment as a vital joint, <br /> In the journey of our soul's
              evolution, <br /> With Udbhav as our eternal solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
