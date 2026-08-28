import { NavLink } from "react-router-dom";

import dashboard from "../assets/IconsFiles/Neutral/dash.svg";
import project from "../assets/IconsFiles/Neutral/proj.svg";
import challenge from "../assets/IconsFiles/Neutral/chall.svg";
import analytics from "../assets/IconsFiles/Neutral/anal.svg";

import dashboardAccent from "../assets/IconsFiles/Accent/dash-accent.svg";
import projectAccent from "../assets/IconsFiles/Accent/proj-accent.svg";
import challengeAccent from "../assets/IconsFiles/Accent/chall-accent.svg";
import analyticsAccent from "../assets/IconsFiles/Accent/anal-accent.svg";

function DeskTNav() {
  const app: { name: string } = {
    name: "FOCUS",
  };

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
    <aside className="hidden md:flex h-screen w-40 shrink-0 flex-col border-y-4 border-l-4 border-blue-600 bg-black">
      <nav className="flex h-full flex-col gap-1 px-2 pt-32 text-gray-400">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 transition ${
                isActive ? "text-white border-l-2 border-l-white" : "hover:text-black hover:bg-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt=""
                  className="h-8 w-8"
                />

                <span className="py-4">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        <NavLink
          to="/"
          className="mt-auto pb-28 text-center text-xl text-white hover:text-gray-400">
          {app.name}
        </NavLink>
      </nav>
    </aside>
  );
}

export default DeskTNav;