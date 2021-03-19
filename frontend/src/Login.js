import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import axios from './axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  const register = async (e) => {
    e.preventDefault();

    /*  auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // console.log(auth);
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    */

    const res = await axios.post('/api/users', {'email': email, 'password': password});

    if (res['data']['success']===true) {
      window.location.href='/';
    }
    else{
      document.querySelector('.flash-incorrect-login').style.display='block';
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <div className="flash-incorrect-login">
          <p>Sorry! Try again later!</p>
        </div>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to our Amazon Clone's Conditions of use and
          sale. Please see our Privacy Notice, our cookie's notice and our
          Interest based ads notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
