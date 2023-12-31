import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import avatar from "../../assets/Dashboard/avatar.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsClicked } from "../../redux/features/navlinkSlice";

const Profile = () => {
  const currentColor = "#03C9D7";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const handleClick = (clicked) => {
    dispatch(setIsClicked(clicked));
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          custumFunc={() => handleClick("userProfile")}
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {user?.name}{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {user?.email}{" "}
          </p>
        </div>
      </div>
      <div>userProfileData</div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          custumFunc={handleLogout}
        />
      </div>
    </div>
  );
};

export default Profile;
