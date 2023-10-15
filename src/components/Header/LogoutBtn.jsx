import React from "react";
import "./style.scss";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Logout not work :: Logout Error ::", error);
      });
  };

  return (
    <button className="logoutBtn" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
