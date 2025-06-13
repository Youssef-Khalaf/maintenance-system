import React from "react";
import "./signup.css";
// import Link from "next/link";
import SignUPForm from "@/componantes/Users/SignUpForm";
import "@/componantes/Users/SignUpForm.css";
import Image from "next/image";

const register = () => {
  return (
    <div className="bgcolor">
      <div className="registerForm">
        <div className="">
          <h4>Sign Up </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <SignUPForm />
        </div>
        <div>
          <Image
            src={"/Maintenance-Engineers.webp"}
            priority
            fill
            sizes="max-width :50%"
            alt="can't access"
          ></Image>
        </div>
        {/* <div>
          <div className=" signinForm ">
            <SignUPForm />
            <p>
              {"Don't have an account? "}{" "}
              <Link className="Link" href={"/"}>
                Sign Up
              </Link>
            </p>
            <div></div>
          </div>

          <div className=" signinForm ">
            <SignUPForm />
            <p>
              {"Don't have an account? "}{" "}
              <Link className="Link" href={"/"}>
                Sign Up
              </Link>
            </p>
            <div></div>
          </div>
        </div> */}
        {/* <div className=" text sm:block hidden">
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
        </div> */}
        <div className="signinForm">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default register;
/*



    <div
      className={
        style.bgcolor + " h-lvh w-auto  flex items-center justify-center"
      }
    >
      <div className={"contaner bg-white  " + style.register}>
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
