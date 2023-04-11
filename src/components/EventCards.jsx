import { Link } from "react-router-dom";
import { Events } from "../components/Data";

const EventCards = () => {
  return (
    <div className="w-full pt-16 text-white ">
      <div className=" flex flex-row flex-wrap justify-evenly w-full h-max">
        {Object.entries(Events).map((item, i) => {
          return (
            <div
              className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
              key={i}>
              <div className="flex gap-5 flex-wrap justify-center items-center">
                {item[1].map((value, index) => {
                  return (
                    <Link to={value.link}>
                      <div
                        className="card w-64 h-[28rem] bg-base-100 shadow-xl"
                        key={index}>
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
