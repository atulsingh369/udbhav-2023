import { techEvents } from "./Data";

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