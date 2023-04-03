import React from "react";

const Home = () => {
  return (
    <div className="bg-home-background bg-no-repeat bg-cover h-screen pt-20">
      <div id="text-drop" className=" p-5">
        <div className="u text-white">U</div>
        <div className="d text-white">D</div>
        <div className="b text-white">B</div>
        <div className="h text-white">H</div>
        <div className="a text-white">A</div>
        <div className="v text-white">V</div>
      </div>
      <div
        id="scroll-container"
        className="flex flex-col items-start p-5 overflow-hidden h-96 "
      >
        <div id="scroll-text">
          <p
            id="paragraph"
            className="text-white text-xl font-semibold text-left leading-10 mt-5
            "
          >
            Udbhav, the starting point of all, <br /> The seed from which we
            grow and stand tall. <br /> Our journey towards self-realization,{" "}
            <br /> Begins with this moment of initiation.
          </p>
          <p
            id="paragraph"
            className="text-white text-xl font-semibold text-left leading-10 mt-5"
          >
            From the first breath we take, <br /> To every step that we make,{" "}
            <br /> Life's journey begins with a spark, <br /> A fire that
            ignites our inner mark.
          </p>
          <p
            id="paragraph"
            className="text-white text-xl font-semibold text-left leading-10 mt-5"
          >
            Udbhav, the source of our being, <br /> A force that sets us on a
            path of seeing, <br /> The world in all its beauty and pain, <br />{" "}
            And in this journey, we shall gain.
          </p>
          <p
            id="paragraph"
            className="text-white text-xl font-semibold text-left leading-10 mt-5"
          >
            Wisdom, love, and understanding, <br /> The fruits of our soul's
            expanding, <br /> As we walk the path of our destiny, <br /> Udbhav
            guides us to our ultimate harmony.
          </p>
          <p
            id="paragraph"
            className="text-white text-xl font-semibold text-left leading-10 mt-5"
          >
            So let us embrace this starting point, <br /> And cherish every
            moment as a vital joint, <br /> In the journey of our soul's
            evolution, <br /> With Udbhav as our eternal solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
