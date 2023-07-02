import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  FaClipboard,
  FaQuestionCircle,
  FaSignOutAlt,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaTrashAlt,
  FaBolt,
  FaUser,
  FaKey
} from "react-icons/fa";
import profile from "../../assets/User.png";

const Sidebar = () => {
  return (
    <div id="sidebar" className="bg-primary h-screen px-5">
      <div className="flex flex-col items-center relative pt-10">
        <div className="h-[100px] w-[100px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
          <img src={profile} alt="" className="h-[100px] w-[100px] rounded-full" />
        </div>
        <p className="font-semibold text-lg">Mavis Berry</p>
      </div>

      <div className="flex items-center gap-4 pt-5">
        <FaUser className="text-black" />
        <NavLink  exact="true" to="/profile" className="text-base leading-6  text-black> ">Profile</NavLink> 
      </div>

      <div className="">
        <Link to="user">
          <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <FaClipboard className="text-black" />
              <NavLink to="/reservation" className="text-base leading-6 font-normal text-black"><p >Reservation</p></NavLink>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <FaKey className="text-black" />
          <NavLink to="/changepassword" className="text-base leading-6 font-normal text-black">Change Password</NavLink>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between gap-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaQuestionCircle className="text-black" />
            <NavLink to="/support" className="text-base leading-6 font-normal text-black">Help & Support</NavLink>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaTrashAlt className="text-black" />
            <NavLink to="/deleteaccount" className="text-base leading-6 font-normal text-black"> Delete Account</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaSignOutAlt className="text-black" />
          <NavLink to="logout" className="text-base leading-6 font-normal text-black">Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
