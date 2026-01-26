import React from "react";
import userContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);
  return user ? <div>name:{user?.username}</div> : <p>Please Login</p>;
};

export default Profile;
