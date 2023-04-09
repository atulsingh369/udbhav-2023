import React from "react";
import "./FormStyle.scss";
import TextMoving from "../TextMoving";
const BridgeItForm = () => {
  return (
    <div className="h-screen">
      <div class="login-box">
        <h2 className="text-2xl font-semibold">Bridge It</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Name*</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>UD Id*</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Phone No.*</label>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default BridgeItForm;
