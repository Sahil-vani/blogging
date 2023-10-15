import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="mainContainer">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
