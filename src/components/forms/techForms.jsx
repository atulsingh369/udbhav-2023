import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { techEvents } from "../Data";
import "./FormStyle.scss";
import { ToastContainer, toast } from "react-toastify";

const techForms = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(1);
  const [members, setMembers] = useState([]);

  const initialValues = {
    mName: "",
    uid: "",
    phnNo: "",
    extra: [],
  };

  const [userForm, setUserForm] = useState({
    teamN: "",
    details: [],
  });

  const [values, setValues] = useState(initialValues);

  const addMember = (e) => {
    e.preventDefault();
    if (!values.mName) {
      toast.error("Enter details");
      return;
    }
    setMembers([...members, values]);
    // setCount(count + 1);
    setValues(initialValues);
    console.log(members);
  };

  const handleUpdate = (item, i) => {
    setCount(count - 1);
    setValues(item);
    delete members[i];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserForm({ details: [...members] });
    if (userForm.details === 0) {
      toast.error("Enter Required Details");
      setUserForm({
        teamN: "",
        details: [],
      });
      setLoading(false);
      return;
    }
    console.log(userForm.details[0]);
    toast.warning("Details submitted");
  };

  return (
    <div className="h-screen  ">
      {Object.entries(techEvents).map((item, i) => {
        if (item[0] === id) {
          return (
            <div className="login-box scrollbar-hidden overflow-y-auto" key={i}>
              {item[1].map((value, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold">{value.title}</h2>

                    {value.type === "group" && (
                      <div className="flex flex-col gap-5">
                        <div className="user-box">
                          <input
                            type="text"
                            value={userForm.teamN}
                            onChange={(e) =>
                              setUserForm({ teamN: e.target.value })
                            }
                            name="teamN"
                            required=""
                          />
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
                                <button
                                  className="text-white my-5 rounded-xl p-3 border-2 border-white"
                                  onClick={() => handleUpdate(item, i)}>
                                  Update
                                </button>
                              </div>
                            );
                          })}
                      </div>
                    )}
                    {value.type === "group" && (
                      <div className="flex flex-row gap-10">
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
                    )}
                    {value.type === "solo" && (
                      <div className="flex flex-col gap-10">
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
                          <label>Name*</label>
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
                    )}
                    {count < value.limit && value.type === "group" && (
                      <button
                        type="button"
                        onClick={addMember}
                        className="text-white my-5 rounded-xl p-3 border-2 border-white">
                        Add more
                      </button>
                    )}

                    {value.extra &&
                      value.extra.map((item, index) => (
                        <div key={index} className="user-box mt-5">
                          <input
                            type="text"
                            value={values.extra}
                            onChange={(e) =>
                              setValues({ ...values, extra: e.target.value })
                            }
                            name="extra"
                            required=""
                          />
                          <label> {item}*</label>
                        </div>
                      ))}
                    <button
                      onClick={handleSubmit}
                      className="submit"
                      type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </button>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
      <ToastContainer />
    </div>
  );
};

export default techForms;
