import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User profile</h1>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserProfile;
