import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EventTopBar = () => {
  const [schedule, setSchedule] = useState(false);
  const [event, setEvent] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="fixed z-40">
      <div id="top-bar">
        <div className="dropdown ">
          <label tabIndex={0} className="btn   w-screen">
            Event List
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 text-white w-screen"
          >
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
      ;
    </div>
  );
};

export default EventTopBar;
