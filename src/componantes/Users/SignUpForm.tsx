import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import "./SignUpForm.css";
function SignUPForm() {
  return (
    <form>
      <div className="formfeild">
        <FaUser className="size-6 " />
        <input
          type="text"
          placeholder="User Name "
          className="focus:outline-2  focus:outline-transparent "
        />
      </div>

      <div className="formfeild order-3">
        <FaUser className="size-6 " />
        <input
          type="text"
          placeholder="Phone number "
          className="focus:outline-2  focus:outline-transparent "
        />
      </div>
      <div className="formfeild">
        <FaUser className="size-6 " />
        <input
          type="text"
          placeholder="Email "
          className="focus:outline-2  focus:outline-transparent "
        />
      </div>
      <div className="formfeild ">
        <label htmlFor="job"> Job Title : </label>
        <select className="ml-2" name="job" id="job">
          <option value="1"> Engineer </option>
          <option value="2"> Technical </option>
          <option value="3"> Manager </option>
        </select>
      </div>

      <div className="formfeild ">
        <label htmlFor="department"> department : </label>
        <select className="ml-2" name="department" id="department">
          <option value="1"> Electrical </option>
          <option value="2"> Mechanical </option>
          <option value="3"> IT </option>
        </select>
      </div>
      <div className="formfeild ">
        <label htmlFor="Manager"> Manager : </label>
        <select className="ml-2" name="Manager" id="Manager">
          <option value="1"> Ahmed </option>
          <option value="2"> George </option>
          <option value="3"> Faris </option>
          <option value="4"> Youssef </option>
        </select>
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

      <div className="formfeild  ">
        {/* sm:gap-1.5  p-1.5 mt-2 rounded-sm items-center bg-[#b4bfca] */}

        <IoMdLock className="size-6 " />
        <input
          type="password"
          placeholder="Confirm Passwoed"
          className={" focus:outline-transparent focus:outline-2  pl-1.5 "}
        />
        <button>SHOW</button>
      </div>
      <button type="button" className="bntsignin">
        sign in
      </button>
    </form>
  );
}

export default SignUPForm;
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
