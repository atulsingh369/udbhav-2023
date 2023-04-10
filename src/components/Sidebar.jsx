import { Department } from "./Data";

const Sidebar = () => {
  return (
    <>
      <div id="side-bar" className="drawer drawer-mobile w-80 sticky top-16 ">
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
          <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-5">
            {/* <!-- Sidebar content here --> */}
            {Object.entries(Department).map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-bold rounded-lg shadow-sm hover:bg-base-200 cursor-pointer shadow-zinc-800"
                >
                  <a
                    className="active:bg-base-200 active:text-white"
                    href={`#${item[0]}`}
                  >
                    {item[0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
