import { Link } from "react-router-dom";
import { cultEvents } from "./Data";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CulturalEvents = () => {
  const user = useSelector((state) => state.user);

  const alert = () => {
    toast.warning("Forms will be available soon");
  };

  const login = () => {
    toast.warning("Login to Continue");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14 lg:mt-0">
      <div>
        <h1 className="text-3xl p-3 font-semibold text-white">
          CULTURAL EVENTS
        </h1>
      </div>
      {user && (
        <div className=" bg-home-background bg-cover flex flex-row flex-wrap justify-center h-max">
          {Object.entries(cultEvents).map((item, i) => {
            return (
              <div
                className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                key={i}
              >
                <div className="flex gap-5 flex-wrap justify-center items-center">
                  {item[1].map((value, index) => {
                    return (
                      <Link to={`/culturalform/${value.id}`}>
                        <div
                          onClick={alert}
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
                            <h2 className="card-title ext-2xl ">
                              {value.title}
                            </h2>
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
      )}
      {!user && (
        <div className=" bg-home-background bg-cover flex flex-row flex-wrap justify-center h-max">
          {Object.entries(cultEvents).map((item, i) => {
            return (
              <div
                className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                key={i}
              >
                <div
                  onClick={login}
                  className="flex gap-5 flex-wrap justify-center items-center"
                >
                  {item[1].map((value, index) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}{" "}
      <ToastContainer />
    </div>
  );
};

export default CulturalEvents;
