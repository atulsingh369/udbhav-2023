const techEvents = {
  webathon: [
    {
      title: "WEB-A-THON",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "",
    },
  ],
  pathik: [
    {
      title: "PATHIK",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathik.png?updatedAt=1680497789564",
      link: "",
    },
  ],
  spartans: [
    {
      title: "SPARTANS",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/spartans.png?updatedAt=1680497823254",
      link: "",
    },
  ],
  rocketPropulsion: [
    {
      title: "ROCKET REPULSION",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/rocketPropulsion.png?updatedAt=1680497823836",
      link: "",
    },
  ],
  bridgeIt: [
    {
      title: "BRIDGE IT",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/bridgeIt.png?updatedAt=1680497824188",
      link: "",
    },
  ],

  roboSoccer: [
    {
      title: "ROBOSOCCER",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/roboSoccer.png?updatedAt=1680497825112",
      link: "",
    },
  ],
};
const TechEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl p-3 font-semibold ">TECHNOVATION</h1>
      </div>
      <div className="bg-white flex flex-row flex-wrap justify-center h-max">
        {Object.entries(techEvents).map((item, i) => {
          return (
            <div
              className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105"
              key={i}
            >
              <div className="flex gap-5 flex-wrap justify-center items-center">
                {item[1].map((value, index) => {
                  return (
                    <a href={value.link}>
                      <div
                        className="card w-60 h-[24rem] bg-base-100 shadow-xl"
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
                          <h2 className="card-title text-sm">{value.title}</h2>
                        </div>
                      </div>
                    </a>
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
