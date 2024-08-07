import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Login.css";
import Api from "/src/services/axios";
import { toastOptions } from "/src/services/toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const submitLogin = () => {
    console.log(toastOptions.error);
    let data = {
      username: username.current.value,
      password: password.current.value,
    };

    Api.post("/login", data)
      .then((res) => {
        localStorage.setItem("access-token", res.data.access);
        localStorage.setItem("refresh-token", res.data.refresh);

        toast.success("Login Success");
        // navigate("/dash");
        setTimeout(() => {
          location.href = "/dash";
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        if (data.username != "" || data.password != "") {
          toast.error(
            "Login Failed.\n Username or Password is wrong",
            toastOptions.error
          );
        } else {
          toast(
            "Please fill the username and password to login",
            toastOptions.warning
          );
        }
      });
  };

  return (
    <div className="grid grid-rows-4 h-full login-page">
      <div className="top-portion row-span-1 place-self-start">
        <div className="grid grid-cols-2 ">
          <img
            className="w-full info-del-logo"
            src="/images/info-del-logo.png"
            alt="infome icon"
          />
        </div>
      </div>

      <div className="down-card row-span-3 grid justify-center rounded-t-2xl p-5 mx-2 border-1 border-slate-400 ">
        <div className="grid grid-rows-4 h-full place-content-between">
          <div className="row-span-1">
            <h1 className="font-bold text-3xl my-2">Login</h1>
            <p>Please enter email and username</p>
          </div>

          <div className="row-span-2">
            <div className="row-span-2">
              <div className="w-full grid grid-rows-2">
                <div className="w-full">
                  <label htmlFor="username">Username</label>
                  <InputText
                    id="username"
                    ref={username}
                    className="w-full my-2"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="username">Password</label>
                  <InputText
                    id="username"
                    ref={password}
                    className="w-full my-2 info-delivery-input-primary"
                  />
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-3"
              label="Login"
              onClick={submitLogin}
              severity="danger"
            />
          </div>
          <div className="place-content-end text-center text-xs text-slate-400">
            © 2024 INFOME TECHNOLOGIES LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
