import React, { useState } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { Button, Input } from "../index";
import authService from "../../appwrite/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    console.log("hello how are you ?");
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <h2 className="heading">Sign in to your account</h2>

        <form
          className="formValue"
          onSubmit={handleSubmit(login)}
          autoComplete="on"
        >
          <Input
            label="Email"
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                    value
                  ) || "Email must be valid address",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            autoComplete="off"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit">Create Account</Button>
        </form>

        {error && <p className="error">{error}</p>}

        <p>
          Don't have any account?&nbsp;
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
