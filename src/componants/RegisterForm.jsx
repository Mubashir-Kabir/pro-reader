import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Utilities/auth";

const RegisterForm = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const nameValidation = (e) => {
    if (e.target.value === " ") {
      setErr("Please tell us your name");
      return;
    }
    if (!/.{4,}/.test(e.target.value)) {
      setErr("Please tell us your full name");
      return;
    }
    setErr("");
    setName(e.target.value);
  };
  const mailValidation = (e) => {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    if (mail) {
      setErr("");
      setEmail(e.target.value);
    } else {
      setErr("Invalid Email Address!!");
    }
  };
  const passValidation = (e) => {
    if (!/.{6,}/.test(e.target.value)) {
      setErr("password should be at least 6 charecter!!");
      return;
    }
    if (!/(?=.*?[0-9])/.test(e.target.value)) {
      setErr("password should be at least 1 digit!!");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(e.target.value)) {
      setErr("password should be at least 1 special cherecter!!");
      return;
    }
    setErr("");
    setPassword(e.target.value);
  };

  const signUpWithEmailPass = (event) => {
    event.preventDefault();
    if (name && email && password) {
      setErr("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErr("successfully registered!!");
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            setErr("The Email is already registered");
            return;
          }
          setErr(errorMessage);
        });
    } else {
      setErr("Please fill the informtion bellow");
    }
  };

  return (
    <div>
      <h1 className="text-red-500">{err}</h1>
      <div className="w-full p-8 space-y-3 rounded-xl bg-white shadow-2xl text-gray-800">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              onBlur={nameValidation}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              onBlur={mailValidation}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              onBlur={passValidation}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <button
            onClick={signUpWithEmailPass}
            className="block w-full p-3 text-center rounded-md text-gray-50 bg-purple-600 hover:bg-purple-800"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Already have an account?{" "}
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>

        <p className="text-xs text-center sm:px-6 text-gray-600">
          <Link
            rel="noopener noreferrer"
            to="/sign-in"
            className="underline text-purple-600"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
