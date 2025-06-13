import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import "./SignInForm.css";
function SignInForm() {
  return (
    <form>
      <div className="formfeild">
        <FaUser className="size-6 " />
        <input
          type="text"
          placeholder="Email "
          className="focus:outline-2  focus:outline-transparent "
        />
      </div>

      <div className="formfeild  ">
        {/* sm:gap-1.5  p-1.5 mt-2 rounded-sm items-center bg-[#b4bfca] */}

        <IoMdLock className="size-6 " />
        <input
          type="password"
          placeholder="Passwoed"
          className={" focus:outline-transparent focus:outline-2  pl-1.5 "}
        />
        <button>SHOW</button>
      </div>
      <button className="forgotpassword">forgot Password?</button>
      <button type="button" className="bntsignin">
        sign in
      </button>
    </form>
  );
}

export default SignInForm;
/*

    <form>
      <div className=" flex gap-2 p-1.5 mt-2 rounded-sm items-center bg-[#b4bfca] ">
        <FaUser className="size-6" />
        <input
          type="text"
          placeholder="User Name "
          className="focus:outline-2  focus:outline-transparent "
        />
      </div>

      <div className="   sm:gap-1.5  p-1.5 mt-2 rounded-sm items-center bg-[#b4bfca] ">
        <div className=" ">
          <IoMdLock className="size-6" />
          <input
            type="text"
            placeholder="Passwoed"
            className={" focus:outline-transparent focus:outline-2  pl-1.5 "}
          />
        </div>
        <button className="justify-self-end">show</button>
      </div>
    </form>
*/
