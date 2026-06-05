import { NavLink } from "react-router-dom";

import dashboard from "../assets/IconsFiles/Neutral/dash.svg";
import project from "../assets/IconsFiles/Neutral/proj.svg";
import challenge from "../assets/IconsFiles/Neutral/chall.svg";
import analytics from "../assets/IconsFiles/Neutral/anal.svg";

import dashboardAccent from "../assets/IconsFiles/Accent/dash-accent.svg";
import projectAccent from "../assets/IconsFiles/Accent/proj-accent.svg";
import challengeAccent from "../assets/IconsFiles/Accent/chall-accent.svg";
import analyticsAccent from "../assets/IconsFiles/Accent/anal-accent.svg";

import logo from "../assets/logo.png"

function DeskTNav() {
  const app : {name:string, logo:string}= {
    name :"Focus",
    logo
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
    <aside className="hidden md:flex flex-col w-42 h-screen bg-blue-950 border-r">
      
   <NavLink
  to="/"
  className="mt-2"
>
  <img src={app.logo} alt={app.name} className="w-12 h-12 object-contain"/>
</NavLink>

      <nav className="flex flex-col gap-6 mt-18 text-gray-400 px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-5 transition ${
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
                <span className="py-1">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

  
    </aside>
  );
}

export default DeskTNav;