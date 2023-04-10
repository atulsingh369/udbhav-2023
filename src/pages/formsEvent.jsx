import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { techEvents } from "../components/Data";

const formsEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const user = useSelector((state) => state.user);

const memberRef = useRef();
const boxRef = useRef();
  const [count, setCount] = useState(1);

  const addMember = (e) => {
		e.preventDefault();
		boxRef.ap
		setCount(count + 1);
		
  };

  return (
    <div className="h-screen  ">
      {Object.entries(techEvents).map((item, i) => {
        if (item[0] === id) {
          return (
            <div class="login-box ">
              {item[1].map((value, index) => {
                return (
                  <div>
                    <h2 className="text-2xl font-semibold">{value.title}</h2>
                    <form>
                      <div className="flex flex-row gap-10">
                        <div class="user-box">
                          <input type="text" name="" required="" />
                          <label>Team Name*</label>
                        </div>
                      </div>
                      <div ref={boxRef}>
                        <div ref={memberRef} className="flex flex-row gap-10">
                          <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Member {count}*</label>
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
                      </div>

                      <button
                        onClick={addMember}
                        className="text-white my-5 rounded-xl p-3 border-2 border-white">
                        Add more
                      </button>

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
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default formsEvent;
