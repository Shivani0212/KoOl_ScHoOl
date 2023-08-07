import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../assets/Dashboard/avatar.jpg"

import { useSelector, useDispatch } from "react-redux";
import { showSidebar, hideSidebar, setScreenSize} from "../../redux/features/dashboardSlice";
import { setIsClicked } from "../../redux/features/navlinkSlice";
import Chat from "./Chat";
import Notification from "./Notification";
import Profile from "./Profile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {activeMenu} = useSelector((state) => state.dashboardContext);

  const isClicked = useSelector((state) => state.navlinkContext);
  const dispatch = useDispatch();

  const handleActiveMenu = () => {
    if(activeMenu) {
        dispatch(hideSidebar())
    }else {
        dispatch(showSidebar())
    }
  };


  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = window.innerWidth;
      dispatch(setScreenSize(newScreenSize));

      if (newScreenSize <= 900) {
        dispatch(hideSidebar());
      } else {
        dispatch(showSidebar());
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const handleClick = (clicked) => {
    dispatch(setIsClicked(clicked));
  };


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      
      <div className="flex">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              alt="user-profile"
              src={avatar}
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<Profile />)}
      </div>
    </div>
  );
};

export default Navbar;
