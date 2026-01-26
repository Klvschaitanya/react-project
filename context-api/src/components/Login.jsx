import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";
const Login = () => {
  const { setUser } = useContext(userContext);
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => submitHandler(e)}>submit</button>
    </div>
  );
};
export default Login;
