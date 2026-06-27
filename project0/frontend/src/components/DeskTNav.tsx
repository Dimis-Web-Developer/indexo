import { NavLink } from "react-router-dom";

import dashboard from "../assets/IconsFiles/Neutral/dash.svg";
import project from "../assets/IconsFiles/Neutral/proj.svg";
import challenge from "../assets/IconsFiles/Neutral/chall.svg";
import analytics from "../assets/IconsFiles/Neutral/anal.svg";

import dashboardAccent from "../assets/IconsFiles/Accent/dash-accent.svg";
import projectAccent from "../assets/IconsFiles/Accent/proj-accent.svg";
import challengeAccent from "../assets/IconsFiles/Accent/chall-accent.svg";
import analyticsAccent from "../assets/IconsFiles/Accent/anal-accent.svg";
import TopBar from "./TopBar";

function DeskTNav() {
  const app : {name:string}= {
    name :"FOCUS",
   
  }

  const menuItems = [
       
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: dashboard,
      activeIcon: dashboardAccent,
    },
    {
      label: "Projects",
      path: "/projects",
      icon: project,
      activeIcon: projectAccent,
    },
    {
      label: "Challenges",
      path: "/challenges",
      icon: challenge,
      activeIcon: challengeAccent,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: analytics,
      activeIcon: analyticsAccent,
    },
  ];

  return (
    <>
    <aside className="hidden md:flex flex-col w-42 h-screen bg-black border-b-4 border-t-4 border-l-4 border-blue-600">
      <nav className="flex flex-col gap-1 mt-32 text-gray-400 px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 transition ${
                isActive ? "text-blue-200" : "hover:text-blue-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  className="w-8 h-8"
                />
                <span className="py-4">{item.label}</span>
              </>
            )}
          </NavLink>
          
        ))}
          <NavLink
  to="/"
  className="mt-60 text-white  text-center hover:text-blue-400 text-xl"
>
{app.name}
</NavLink>
      </nav>
    </aside>
        <TopBar />
    </>
  );
}

export default DeskTNav;