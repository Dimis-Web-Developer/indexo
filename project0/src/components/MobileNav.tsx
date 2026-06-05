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

function MobileNav() {
const app : {name:string, logo:string}= {
    name :"Focus",
    logo
  }  
  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: dashboard, activeIcon: dashboardAccent },
    { label: "Projects", path: "/projects", icon: project, activeIcon: projectAccent },
    { label: "Challenges", path: "/challenges", icon: challenge, activeIcon: challengeAccent },
    { label: "Analytics", path: "/analytics", icon: analytics, activeIcon: analyticsAccent },
  ];

  return (
    <>
     <div className="flex items-center justify-between py-3 bg-blue-950 md:hidden">
  <NavLink
    to="/"
   
  >
    <img src={app.logo} alt={app.name} className="w-10 h-10 object-contain"/>
  </NavLink>

</div>

      <div className="md:hidden fixed bottom-0 left-0 right-0">
        <nav className="bg-blue-950 border-t flex justify-around py-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              className="flex flex-col items-center "
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.label}
                    className="w-8 h-8"
                  />
                 
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default MobileNav;