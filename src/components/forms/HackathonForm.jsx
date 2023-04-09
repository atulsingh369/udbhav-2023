import React from "react";

const HackathonForm = () => {
  return (
    <div className="h-screen  ">
      <div class="login-box ">
        <h2 className="text-2xl font-semibold">WAB-A-THON</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Team Name*</label>
          </div>
          <div className="flex flex-row gap-10">
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Member 1*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>UD Id*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Phone No.*</label>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Member 2*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>UD Id*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Phone No.*</label>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Member 3*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>UD Id*</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Phone No.*</label>
            </div>
          </div>

          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Problem Statement*</label>
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

export default HackathonForm;
