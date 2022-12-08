import React, { useState } from "react";
import "./register.css";
import piclogin from "../gambar.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <section class="Form my-4 ml-5 pt-1 ">
      <main class="container">
        <div class="row no-gutters my-3 mx-1 ">
          <div className="col-lg-6 my-4 ">
            <img src={piclogin} class="img-fluid" alt="login" />
          </div>
          <div class="col-lg-6 my-4 pl-1 ">
            <form>
              <h3>Registration</h3>
              <div class="form-row">
                <div class="col-lg-9"></div>
              </div>
              <div class="form-row">
                <div class="col-lg-9">
                  <i class="uil uil-user-circle"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                    class="my-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-9">
                  <i class="uil uil-envelope"></i>
                  <input
                    type="text"
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
                    class="my-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-9">
                  <i class="uil uil-padlock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    onChange={handleChange}
                    required
                    class="password my-3"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="col-lg-9">
                  <div className="btn" onClick={register}>
                    Login
                  </div>
                </div>
              </div>
              <p className="login">
                Sudah Mempunyai Akun? <a href="./login">Login!</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
