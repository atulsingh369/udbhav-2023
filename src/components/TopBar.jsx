import { Department } from "./Data";

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
            {Object.entries(Department).map((item, i) => {
              return (
                <li key={i}>
                  <a href={`#${item[0]}`}>{item[0]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default TopBar;
