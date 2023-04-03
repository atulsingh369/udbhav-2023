import { useState } from "react";
import { Link } from "react-router-dom";

const SideBarEvents = () => {
  const [schedule, setSchedule] = useState(false);
  const [event, setEvent] = useState(false);
  return (
    <div className="drawer drawer-mobile w-80 sticky top-16 ">
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
            <div>
              <li>
                <a>DAY 1</a>
              </li>
              <li>
                <a>DAY 2</a>
              </li>
            </div>
          )}
          <li className="bg-base-300" onClick={() => setEvent(!event)}>
            <a>EVENTS</a>
          </li>
          {event && (
            <div>
              <li>
                <Link to="/technovation">TECHNOVATION</Link>
              </li>
              <li>
                <Link to="/#!">FUSION</Link>
              </li>
              <li>
                <Link to="/#!">MELODIA</Link>
              </li>
              <li>
                <Link to="/#!">SPOTLIGHT</Link>
              </li>
              <li>
                <Link to="/#!">RUNWAY</Link>
              </li>
              <li>
                <Link to="/#!">HARMONIZE</Link>
              </li>
              <li>
                <Link to="/#!">KAVYANICAL</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBarEvents;
