import React from "react";

const TopBar = () => {
  return (
    <div className="fixed z-40">
      <div id="top-bar">
        <div className="dropdown ">
          <label tabIndex={0} className="btn  w-screen">
            Contact List
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 text-white w-screen"
          >
            <li>
              <a href="#dep-1">Department 1</a>
            </li>
            <li>
              <a href="#dep-2">Department 2</a>
            </li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default TopBar;
