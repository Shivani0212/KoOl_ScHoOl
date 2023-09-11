import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../Data/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../redux/features/dashboardSlice";

const Sidebar = () => {
  const {activeMenu,screenSize} = useSelector((state) => state.dashboardContext);
  const dispatch = useDispatch();
  const currentColor = '#03C9D7';

  const handleSidebar = () => {
    if(activeMenu && screenSize <= 900) {
      dispatch(hideSidebar())
    }
  }

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 dark:bg-black">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[20%] h-[20%] border-dotted border-2 border-sky-500 rounded-full"
              />{" "}
              <span>KoOl ScHoOl</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                style={{ color: "#03C9D7" }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={handleSidebar}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${item.title}/${link.name}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
