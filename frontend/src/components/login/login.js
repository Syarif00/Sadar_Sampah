import React, { useState } from "react";
import "./Login1.css";
import piclogin from "../gambar.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <section className="Form my-4 ml-5 p-2">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <main className="container">
        <div className="row no-gutters my-3 mx-1">
          <div className="col-lg-6 my-4  ">
            <img src={piclogin} class="img-fluid" alt="login" />
          </div>
          <div className=" form1 col-lg-6 my-4  pt-5">
            <form>
              <h3>Login</h3>
              <div class="form-row"></div>
              <div class="form-row">
                <div class="col-lg-9">
                  <i class="uil uil-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    class="my-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-9">
                  <i class="uil uil-padlock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    class="password my-3 "
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="col-lg-9">
                  <div className="btn" onClick={login}>
                    Login
                  </div>
                </div>
              </div>
              <p className="regist">
                Belum Mempunyai Akun? <a href="./register">Register!</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </section>

    /*<div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>*/
  );
};

export default Login;
