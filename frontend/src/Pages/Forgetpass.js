import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmCode,
  forgetPassword,
  updatePassword,
} from "../redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
function Forgetpass() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(null);
  const [err, seterr] = useState(false);
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.userUpdated) navigate("/login");
  }, [auth.userUpdated]);
  const sendCode = () => {
    dispatch(forgetPassword({ email }));
    seterr(true)
  };
  const confirmCodeEmail = () => {
    dispatch(confirmCode({ id: auth.userID, code }));
  };
  const resetPassword = () => {
    dispatch(updatePassword({  id: auth.userID,password}));
    console.log(password)
  };
  return (
    <div className=" mb-4  forget">
      <p className="forget-parg">please enter your email : </p>
      <input
        className="input-forget"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {err ? (
        <p className="alert alert-secondary forget-err mb-2">{auth.message}</p>
      ) : null}
      {!auth.isSent && (
        <div>
          <button className="forget-butt" onClick={sendCode}>
            send email
          </button>
        </div>
      )}

      {auth.isSent && !auth.resetPassword && (
        <div>
          <input
            className="input-forget"
            type="text"
            placeholder="write the code"
            onChange={(e) => setCode(+e.target.value)}
          />
          <button className="forget-butt" onClick={confirmCodeEmail}>
            send code
          </button>
        </div>
      )}
      {auth.resetPassword && (
        <div>
          {" "}
          <input
            className="input-forget"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="forget-butt" onClick={resetPassword}>
            reset your password{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Forgetpass;