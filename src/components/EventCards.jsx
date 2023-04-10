import { Link } from "react-router-dom";

const techEvents = {
  cultural: [
    {
      title: "UDBHAV",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathik.png?updatedAt=1680497789564",
      link: "/cultural",
    },
  ],
  technical: [
    {
      title: "TECHNOVATION",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "/technovation",
    },
  ],
};

const EventCards = () => {
  return (
    <div className="w-full pt-16 text-white ">
      <div className=" flex flex-row flex-wrap justify-evenly w-full h-max">
        {Object.entries(techEvents).map((item, i) => {
          return (
            <div
              className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105"
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

export default EventCards;
