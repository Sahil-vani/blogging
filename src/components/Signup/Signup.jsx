import React, { useState } from "react";
import "./style.scss";
import { Button, Input } from "../index";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="form">
        <h2 className="heading">Sign up to your account</h2>

        <form
          className="formValue"
          onSubmit={handleSubmit(create)}
          autoComplete="on"
        >
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />
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
          already have any account?&nbsp;
          <Link to="/login" className="link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
