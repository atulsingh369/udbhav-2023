import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cultEvents } from "../Data";
import { auth, db } from "../../config";
import "./FormStyle.scss";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const cultForms = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [members, setMembers] = useState([]);

  const initialValues = {
    mName: "",
    branch: "",
    phnNo: "",
  };

  const [values, setValues] = useState(initialValues);
  const [teamN, setTeamN] = useState("");

  const addMember = (e) => {
    e.preventDefault();
    if (!values.mName || !values.branch || !values.phnNo) {
      // if (condition) {

      // }
      toast.error("Enter details");
      return;
    }
    setMembers([...members, values]);
    setCount(count + 1);
    setValues(initialValues);
  };

  const handleUpdate = (i) => {
    // console.log(members,i,members[i])
    setValues(members[i]);
    setCount(count - 1);
    delete members[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!teamN || members.length === 0) {
      toast.error("Enter Details");
      setLoading(false);
      setTeamN("");
      setValues(initialValues);
      return;
    } else {
      await setDoc(doc(db, id, teamN), {
        uid: auth.currentUser.uid,
        "Team Name": teamN,
        Members: members,
      });
      toast.success("Submitted");
      setLoading(false);
      setTeamN("");
      setValues(initialValues);
      setMembers([]);
      setTimeout(function () {
        navigate("/cultural");
      }, 2000);
    }
  };

  const submitSolo = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!values.mName || !values.branch || !values.phnNo) {
      toast.error("Enter Details");
      setLoading(false);
      setValues(initialValues);
      return;
    } else {
      await setDoc(doc(db, id, values.email), {
        Name: values.mName,
        Branch: values.branch,
        "Phone No": values.phnNo,
      });
      toast.success("Submitted");
      setLoading(false);
      setValues(initialValues);
      setTimeout(function () {
        navigate("/cultural");
      }, 2000);
    }
  };

  return (
    <div className="h-screen ">
      {Object.entries(cultEvents).map((item, i) => {
        if (item[0] === id) {
          return (
            <div className="login-box scrollbar-hidden md:w-fit w-full overflow-y-scroll h-4/5 md:h-fit mt-4 " key={i}>
              {item[1].map((value, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold">{value.title}</h2>

                    {value.type === "group" && (
                      <div className="flex flex-col gap-5">
                        <div className="user-box">
                          <input
                            type="text"
                            value={teamN}
                            onChange={(e) => setTeamN(e.target.value)}
                            name="teamN"
                            required=""
                          />
                          <label>Team Name*</label>
                        </div>
                        {members.length !== 0 &&
                          members.map((arr_item, i) => {
                            return (
                              <div className="flex flex-col md:flex-row gap-10" key={i}>
                                <div className="user-box">
                                  <input
                                    contentEditable={false}
                                    type="text"
                                    value={arr_item && arr_item.mName}
                                  />
                                  <label>Member {i + 1}*</label>
                                </div>
                                <div className="user-box">
                                  <input
                                  placeholder="CSE/A3"
                                    contentEditable={false}
                                    type="text"
                                    value={arr_item && arr_item.branch}
                                  />
                                  <label>Branch/Year*</label>
                                </div>
                                <div className="user-box">
                                  <input
                                    contentEditable={false}
                                    type="number"
                                    value={arr_item && arr_item.phnNo}
                                  />
                                  <label>Phone No.*</label>
                                </div>
                                {/* <button
                                  className="border-2 text-sm border-white text-white p-2 hover:text-yellow-600 hover:border-yellow-600 rounded-xl h-fit"
                                  onClick={() => handleUpdate(i)}>
                                  Update
                                </button> */}
                              </div>
                            );
                          })}
                      </div>
                    )}
                    {value.type === "group" && count <= value.limit && (
                      <div className="flex justify-center flex-col md:flex-row  md:gap-10">
                        <div className="user-box">
                          <input
                            type="text"
                            value={values && values.mName}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                mName: e.target.value,
                              })
                            }
                            name="mName"
                            required=""
                          />
                          <label>Member {count}*</label>
                        </div>
                        <div className="user-box">
                          <input
                          placeholder="CSE/A3"
                            type="text"
                            value={values && values.branch}
                            onChange={(e) =>
                              setValues({ ...values, branch: e.target.value })
                            }
                            name="branch"
                            required=""
                          />
                          <label>Branch/Year*</label>
                        </div>
                        <div className="user-box">
                          <input
                            type="number"
                            value={values && values.phnNo}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                phnNo: e.target.value,
                              })
                            }
                            name="phnNo"
                            required=""
                          />
                          <label>Phone No.*</label>
                        </div>
                        {count <= value.limit && value.type === "group" && (
                          <button
                            type="button"
                            onClick={addMember}
                            className="border-2 text-sm border-white text-white p-2 hover:text-green-600 hover:border-green-600 rounded-xl h-fit">
                            Add
                          </button>
                        )}
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
                          placeholder="CSE/A3"
                            type="text"
                            value={values.branch}
                            onChange={(e) =>
                              setValues({ ...values, branch: e.target.value })
                            }
                            name="branch"
                            required=""
                          />
                          <label>Branch/Year*</label>
                        </div>
                        <div className="user-box">
                          <input
                            type="number"
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

                    {/* {value.extra &&
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
                      ))} */}
                    <button
                      onClick={
                        value.type === "group" ? handleSubmit : submitSolo
                      }
                      className="submit"
                      type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      {loading ? "Submitting" : "Submit"}
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

export default cultForms;
