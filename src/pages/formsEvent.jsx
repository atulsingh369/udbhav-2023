import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { techEvents } from "../components/Data";

const formsEvent = () => {
  const { id } = useParams();
  // const user = useSelector((state) => state.user);

  const memberRef = useRef();

  const [count, setCount] = useState(1);

  const initialValues = {
    mName: "",
    uid: "",
    phnNo: "",
  };

  const [members, setMembers] = useState([]);

  const [values, setValues] = useState(initialValues);
  const { mName, uid, phnNo } = values;

  const handleSubmit = () => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const addMember = () => {
    setMembers([...members, values]);
    // setValues(initialValues);
    setCount(count + 1);
    setValues(initialValues);
    console.log(members);
  };

  const handleUpdate = (item, i) => {
    setCount(count - 1);
    setValues(item);
    delete members[i];
  };

  return (
    <div className="h-screen  ">
      {Object.entries(techEvents).map((item, i) => {
        if (item[0] === id) {
          return (
            <div className="login-box overflow-scroll h-2/3" key={i}>
              {item[1].map((value, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold">{value.title}</h2>
                    <form>
                      <div className="flex flex-col gap-5">
                        <div className="user-box">
                          <input type="text" name="" required="" />
                          <label>Team Name*</label>
                        </div>
                        {members.length !== 0 &&
                          members.map((arr_item, i) => {
                            return (
                              <div className="flex flex-row gap-10" key={i}>
                                <div className="user-box">
                                  <input
                                    contentEditable={false}
                                    type="text"
                                    value={arr_item.mName}
                                  />
                                  <label>Member {i + 1}*</label>
                                </div>
                                <div className="user-box">
                                  <input
                                    contentEditable={false}
                                    type="text"
                                    value={arr_item.uid}
                                  />
                                  <label>UD Id*</label>
                                </div>
                                <div className="user-box">
                                  <input
                                    contentEditable={false}
                                    type="text"
                                    value={arr_item.phnNo}
                                  />
                                  <label>Phone No.*</label>
                                </div>
                                <button onClick={() => handleUpdate(item, i)}>
                                  Update
                                </button>
                              </div>
                            );
                          })}
                      </div>
                      <div ref={memberRef} className="flex flex-row gap-10">
                        <div className="user-box">
                          <input
                            type="text"
                            value={values.mName}
                            onChange={(e) =>
                              setValues({ ...values, mName: e.target.value })
                            }
                            name="mName"
                            required=""
                          />
                          <label>Member {count}*</label>
                        </div>
                        <div className="user-box">
                          <input
                            type="text"
                            value={values.uid}
                            onChange={(e) =>
                              setValues({ ...values, uid: e.target.value })
                            }
                            name="uid"
                            required=""
                          />
                          <label>UD Id*</label>
                        </div>
                        <div className="user-box">
                          <input
                            type="text"
                            value={values.phnNo}
                            onChange={(e) =>
                              setValues({ ...values, phnNo: e.target.value })
                            }
                            name="phnNo"
                            required=""
                          />
                          <label>Phone No.*</label>
                        </div>
                      </div>

                      {count < value.limit && (
                        <button
                          type="button"
                          onClick={addMember}
                          className="text-white my-5 rounded-xl p-3 border-2 border-white"
                        >
                          Add more
                        </button>
                      )}

                      <div className="user-box">
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
