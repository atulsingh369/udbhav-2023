import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="">
        <div className="drawer drawer-mobile md:flex hidden">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <a href="#department-1">Department 1</a>
              </li>
              <li>
                <a href="#department-2">Department 2</a>
              </li>
              <li>
                <a href="#department-3">Department 3</a>
              </li>
              <li>
                <a href="#department-4">Department 4</a>
              </li>
              <li>
                <a href="#department-5">Department 5</a>
              </li>
              <li>
                <a href="#department-6">Department 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
