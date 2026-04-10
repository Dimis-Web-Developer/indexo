import { useState } from "react";

import dashboard from "../assets/IconsFiles/Neutral/dash.svg";
import project from "../assets/IconsFiles/Neutral/proj.svg";
import challenge from "../assets/IconsFiles/Neutral/chall.svg";
import analytics from "../assets/IconsFiles/Neutral/anal.svg";

import dashboardAccent from "../assets/IconsFiles/Accent/dash-accent.svg";
import projectAccent from "../assets/IconsFiles/Accent/proj-accent.svg";
import challengeAccent from "../assets/IconsFiles/Accent/chall-accent.svg";
import analyticsAccent from "../assets/IconsFiles/Accent/anal-accent.svg";

function MobileNav() {
  const [active, setActive] = useState<string>("");

  const menuItems = [
    {
      label: "Dashboard",
      icon: dashboard,
      activeIcon: dashboardAccent,
    },
    {
      label: "Projects",
      icon: project,
      activeIcon: projectAccent,
    },
    {
      label: "Challenges",
      icon: challenge,
      activeIcon: challengeAccent,
    },
    {
      label: "Analytics",
      icon: analytics,
      activeIcon: analyticsAccent,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-white md:hidden">
        <h1 className="text-lg font-bold text-blue-200">Focus</h1>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0">
        <nav className="bg-blue-950 border-t flex  justify-around py-2">
          {menuItems.map((item) => {
            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex flex-col cursor-pointer items-center text-xs ${
                  isActive ? "text-blue-200" : "text-gray-500"
                }`}
              >
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  className="w-8 h-8"
                />
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default MobileNav;