import { Link } from "react-router-dom";

const techEvents = {
  webathon: [
    {
      title: "WEB-A-THON",
      describe:
        "Code your way to innovation - break barriers and bring your ideas to life at the hackathon!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "/WAB-a-thon-form",
    },
  ],
  pathik: [
    {
      title: "PATHIK",
      describe:
        "Efficiently navigate your world - let your robot pave the way with intelligent path routing!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathik.png?updatedAt=1680497789564",
      link: "/pathik-form-event",
    },
  ],
  spartans: [
    {
      title: "SPARTANS",
      describe:
        "Get ready to rev your robots - navigate obstacles and race to the finish line!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/spartans.png?updatedAt=1680497823254",
      link: "",
    },
  ],
  rocketPropulsion: [
    {
      title: "ROCKET REPULSION",
      describe:
        "Reach for the stars with rocket propulsion - let the power of science launch you to new heights!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/rocketPropulsion.png?updatedAt=1680497823836",
      link: "",
    },
  ],
  bridgeIt: [
    {
      title: "BRIDGE IT",
      describe:
        "Build bridges, connect worlds - let your creativity and skill shine with stick bridge building!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/bridgeIt.png?updatedAt=1680497824188",
      link: "/bridge-it-form",
    },
  ],

  roboSoccer: [
    {
      title: "ROBOSOCCER",
      describe:
        "Gear up for the ultimate showdown - let your robots take on the competition in the electrifying game of robot soccer!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/roboSoccer.png?updatedAt=1680497825112",
      link: "",
    },
  ],
};
const TechEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14 lg:mt-0 ">
      <div className="">
        <h1 className="text-3xl  p-3 font-semibold text-white  ">
          TECHNOVATION
        </h1>
      </div>
      <div className=" bg-home-background bg-cover flex flex-row flex-wrap justify-center h-max">
        {Object.entries(techEvents).map((item, i) => {
          return (
            <div
              className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
              key={i}
            >
              <div className="flex gap-5 flex-wrap justify-center items-center">
                {item[1].map((value, index) => {
                  return (
                    <Link to={value.link}>
                      <div
                        className="card w-64 h-[28rem] bg-base-100 shadow-xl"
                        key={index}
                      >
                        <figure>
                          <img
                            src={value.image}
                            alt="Shoes"
                            className="object-contain"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title ext-2xl ">{value.title}</h2>
                          <p className="text-justify font-semibold text-white">
                            {value.describe}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechEvents;
