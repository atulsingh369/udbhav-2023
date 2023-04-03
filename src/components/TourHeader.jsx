import React from "react";

const TourHeader = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly bg-white p-2 ">
        <div className="flex flex-col">
          <div>
            <p className="text-3xl font-semibold">
              INSTITUTE OF ENGINEERING AND RURAL TECHNOLOGY
            </p>
          </div>
          <div>
            <p className="text-xl ">
              26, Chatham Liner, Prayagraj - 211002 (U.P.)
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              Engineering Degree Division
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/collegeLogo.png?updatedAt=1680446700236"
            alt=""
            className="w-56"
          />
        </div>
      </div>
    </>
  );
};

export default TourHeader;
