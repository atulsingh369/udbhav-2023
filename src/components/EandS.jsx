import React from "react";
import { Link } from "react-router-dom";

const EandS = () => {
  return (
    <>
      <div className="flex flex-row justify-around">
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="btn m-1">
            EVENTS
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/tech-events">TECHNOVATION</Link>
            </li>
            <li>
              <Link to="/event-2">EVENT 2</Link>
            </li>
            <li>
              <Link to="/event-3">EVENT 3</Link>
            </li>
            <li>
              <Link to="/event-4">EVENT 4</Link>
            </li>
            <li>
              <Link to="/event-5">EVENT 5</Link>
            </li>
            <li>
              <Link to="/event-6">EVENT 6</Link>
            </li>
            <li>
              <Link to="/event-7">EVENT 7</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn m-1">
            SCHEDULE
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>DAY 1</a>
            </li>
            <li>
              <a>DAY 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EandS;
