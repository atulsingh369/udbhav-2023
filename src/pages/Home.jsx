import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-row  items-center flex-wrap-reverse">
      <div className="flex flex-row justify-center lg:justify-around md:justify-around w-full flex-wrap  pt-20">
        <div className="w-screen h-10  overflow-hidden bg-base-200 lg:hidden md:hidden flex items-center">
          <p id="target" className="font-bold text-lg  text-white">
            "Udbhav, &nbsp; Where everything begins."
          </p>
        </div>
        <div className="mt-5 lg:mt-0 ">
          <div
            id="text-drop"
            className=" flex flex-row items-center justify-center p-5"
          >
            <div className="u text-black text-8xl">U</div>
            <div className="d text-black text-8xl">D</div>
            <div className="b text-black text-8xl">B</div>
            <div className="h text-black text-8xl">H</div>
            <div className="a text-black text-8xl">A</div>
            <div className="v text-black text-8xl">V</div>
          </div>
          <div className="card w-96     bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/homeCard.png?updatedAt=1680669210627"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="font-bold">
                Udbhav is a Sanskrit word that means "origin" or "source". It is
                often used in spiritual and philosophical contexts to refer to
                the ultimate source or cause of all existence
              </p>
              <div className="card-actions justify-end">
                <button onClick={() => navigate("/tour")} className="btn glass">
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="scroll-container"
          className="flex flex-col items-start  overflow-hidden h-96 p-5 lg:p-0 md:p-0 mt-16  "
        >
          <div id="scroll-text">
            <p
              id="paragraph"
              className="text-black text-xl font-semibold text-center leading-10 
            "
            >
              Udbhav, the starting point of all, <br /> The seed from which we
              grow and stand tall. <br /> Our journey towards self-realization,{" "}
              <br /> Begins with this moment of initiation.
            </p>
            <p
              id="paragraph"
              className="text-black text-xl font-semibold text-center leading-10 mt-5"
            >
              From the first breath we take, <br /> To every step that we make,{" "}
              <br /> Life's journey begins with a spark, <br /> A fire that
              ignites our inner mark.
            </p>
            <p
              id="paragraph"
              className="text-black text-xl font-semibold text-center leading-10 mt-5"
            >
              Udbhav, the source of our being, <br /> A force that sets us on a
              path of seeing, <br /> The world in all its beauty and pain,{" "}
              <br /> And in this journey, we shall gain.
            </p>
            <p
              id="paragraph"
              className="text-black text-xl font-semibold text-center leading-10 mt-5"
            >
              Wisdom, love, and understanding, <br /> The fruits of our soul's
              expanding, <br /> As we walk the path of our destiny, <br />{" "}
              Udbhav guides us to our ultimate harmony.
            </p>
            <p
              id="paragraph"
              className="text-black text-xl font-semibold text-center leading-10 mt-5"
            >
              So let us embrace this starting point, <br /> And cherish every
              moment as a vital joint, <br /> In the journey of our soul's
              evolution, <br /> With Udbhav as our eternal solution.
            </p>
          </div>
        </div>
      </div>
      <div>
        <section className="w-full    flex flex-row justify-center  pt-10 lg:pt-16 ">
          <div className="carousel lg:w-11/12 md:w-11/12">
            <div
              id="slide1"
              className="carousel-item relative w-full flex flex-row items-center justify-center"
            >
              <img
                src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k19banner.jpg?updatedAt=1680522269752"
                className="lg:h-11/12 bg-black "
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
                <a href="#slide1" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
