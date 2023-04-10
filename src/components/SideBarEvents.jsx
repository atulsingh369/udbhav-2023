import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideBarEvents = () => {
  const [schedule, setSchedule] = useState(false);
  const [event, setEvent] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      id="side-bar"
      className="drawer drawer-mobile w-80 sticky top-16 h-screen"
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="bg-base-300" onClick={() => setSchedule(!schedule)}>
            <a>SCHEDULE</a>
          </li>
          {schedule && (
            <div className="flex flex-col p-3 gap-3 cursor-pointer">
              <li>DAY 1</li>
              <li>DAY 2</li>
            </div>
          )}
          <li className="bg-base-300" onClick={() => setEvent(!event)}>
            <a>EVENTS</a>
          </li>
          {event && (
            <div className="flex flex-col p-3 gap-3 cursor-pointer">
              <li onClick={() => navigate("/technovation")}>TECHNOVATION</li>
              <li onClick={() => navigate("/cultural")}>CULTURAL</li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBarEvents;
