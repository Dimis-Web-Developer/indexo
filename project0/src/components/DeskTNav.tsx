import { useState } from "react";

import dashboard from "../assets/IconsFiles/Neutral/dash.svg";
import project from "../assets/IconsFiles/Neutral/proj.svg";
import challenge from "../assets/IconsFiles/Neutral/chall.svg";
import analytics from "../assets/IconsFiles/Neutral/anal.svg";

import dashboardAccent from "../assets/IconsFiles/Accent/dash-accent.svg";
import projectAccent from "../assets/IconsFiles/Accent/proj-accent.svg";
import challengeAccent from "../assets/IconsFiles/Accent/chall-accent.svg";
import analyticsAccent from "../assets/IconsFiles/Accent/anal-accent.svg";

function DeskTNav() {
  const app: string = "Focus";
  const user: string = "Dimis";
  const title: string = "Software Developer";

  const [active, setActive] = useState<string>("");

  // simple menu list (no interfaces/types yet)
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
    <aside className="hidden md:flex flex-col w-44 h-screen bg-blue-950 border-r p-4">
      
      <div className="text-2xl font-bold text-blue-200">{app}</div>

      <nav className="flex flex-col gap-6 mt-24 text-gray-400">
        {menuItems.map((item) => {
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex items-center cursor-pointer gap-5 ${
                isActive ? "text-blue-200" : "hover:text-blue-200"
              }`}
            >
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                className="w-8 h-8"
              />
              <span className="py-1">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-medium">{user}</p>
            <p className="text-xs text-gray-400">{title}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DeskTNav;