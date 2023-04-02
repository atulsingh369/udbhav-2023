import "../SCSS/TourHeader.scss";
import collegeLogo from "https://ik.imagekit.io/e5ixuxrlb/Udbhav/collegeLogo.png?updatedAt=1680446700236";
const CollegeHeader = () => {
  return (
    <>
      <section
        id="college-header-body"
        className="d-flex flex-row justify-content-around"
      >
        <div className="d-flex flex-column align-items-center mt-4">
          <div>
            <h3 className="fw-bold">
              INSTITUTE OF ENGINEERING AND RURAL TECHNOLOGY
            </h3>
          </div>
          <div>
            <h5>26, Chatham Liner, Prayagraj - 211002 (U.P.)</h5>
          </div>
          <div>
            <h4>Engineering Degree Division</h4>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={collegeLogo} alt="" id="college-logo" />
        </div>
      </section>
    </>
  );
};

export default CollegeHeader;
