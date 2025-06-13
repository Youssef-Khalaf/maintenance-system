import SignInForm from "@/componantes/Users/SignInForm";
import React from "react";
import "./signin.css";
import Link from "next/link";

const login = () => {
  return (
    <div className="bgcolor">
      <div className="loginForm">
        <div className=" text sm:block hidden">
          <div></div>
          <h4>WELCOME</h4>
          <p>YOUR HEADLINE NAME</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            provident tempora sapiente assumenda non doloremque ullam maxime, ex
            magnam reprehenderit repellat a, officia quaerat ea aliquid nostrum
            aut harum quibusdam!
          </p>
          <div className="center"></div>
          <div></div>
        </div>

        <div className=" signinForm ">
          <h4>Sign in </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <SignInForm />
          <p>
            {"Don't have an account? "}{" "}
            <Link className="Link" href={"/Users/signup"}>
              Sign Up
            </Link>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default login;
/*



    <div
      className={
        style.bgcolor + " h-lvh w-auto  flex items-center justify-center"
      }
    >
      <div className={"contaner bg-white  " + style.login}>
        <div className=" sm:block hidden">
          <h4>WELCOME</h4>
          <p>YOUR HEADLINE</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            provident tempora sapiente assumenda non doloremque ullam maxime, ex
            magnam reprehenderit repellat a, officia quaerat ea aliquid nostrum
            aut harum quibusdam!
          </p>
        </div>
        <div className="   m-auto w-[80%]  m-auto">
          <div className=" ">
            <h4>Sign in </h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
**/
