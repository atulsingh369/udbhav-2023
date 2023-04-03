const techEvents = {
  fusion: [
    {
      title: "FUSION",
      describe: "Let your feet do the talking - dance to the rhythm of life!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/fusion.png?updatedAt=1680540755181",
      link: "",
    },
  ],
  melodia: [
    {
      title: "MELODIA",
      describe:
        "Unleash your voice and set your soul free - sing your heart out!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/melodia.png?updatedAt=1680541071833",
      link: "",
    },
  ],
  spotLight: [
    {
      title: "SPOTLIGHT",
      describe:
        "Step into the spotlight and bring your story to life - the world is your stage!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/spotlight.png?updatedAt=1680541374488",
      link: "",
    },
  ],
  runway: [
    {
      title: "RUNWAY",
      describe: "Make a statement with style - let fashion be your voice!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/runway.png?updatedAt=1680541647038",
      link: "",
    },
  ],
  harmonize: [
    {
      title: "HARMONIZE",
      describe:
        "Create a symphony with your fingertips - let your music speak louder than words!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/harmonize.png?updatedAt=1680541886718",
      link: "",
    },
  ],

  kavyanical: [
    {
      title: "KAVYANICAL",
      describe:
        "Paint a picture with your words - let your poetry capture the heart and soul!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/kavyanical.png?updatedAt=1680542035401",
      link: "",
    },
  ],
};
const CulturalEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl p-3 font-semibold ">CULTURAL EVENTS</h1>
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
                          <h2 className="card-title text-2xl  ">
                            {value.title}
                          </h2>
                          <p className="text-justify font-semibold text-white">
                            {value.describe}
                          </p>
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

export default CulturalEvents;
