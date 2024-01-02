import HomeIcon from "../assets/home.svg?react";
import GlobeIcon from "../assets/globe.svg?react";
import UserIcon from "../assets/user.svg?react";
import GridIcon from "../assets/grid.svg?react";
import { useState } from "react";

export const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="lg:hidden btm-nav shadow-slate-400 z-50">
      <button onClick={() => setActiveTab("home")}>
        <HomeIcon
          className={`${
            activeTab === "home" ? "fill-primary stroke-black" : ""
          } stroke-slate-500`}
        />
        <span
          className={`btm-nav-label font-extralight text-sm ${
            activeTab === "home" ? "text-black" : "text-gray-400"
          }`}
        >
          Home
        </span>
      </button>
      <button onClick={() => setActiveTab("cat")}>
        <GridIcon
          className={`${
            activeTab === "cat" ? "fill-primary stroke-black" : ""
          } stroke-slate-500`}
        />
        <span
          className={`btm-nav-label font-extralight text-sm ${
            activeTab === "cat" ? "text-black" : "text-gray-400"
          }`}
        >
          Categories
        </span>
      </button>
      <button onClick={() => setActiveTab("exp")}>
        <GlobeIcon
          className={`${
            activeTab === "exp" ? "fill-primary stroke-black" : ""
          } stroke-slate-500`}
        />
        <span
          className={`btm-nav-label font-extralight text-sm ${
            activeTab === "exp" ? "text-black" : "text-gray-400"
          }`}
        >
          Explore
        </span>
      </button>
      <button onClick={() => setActiveTab("pro")}>
        <UserIcon
          className={`${
            activeTab === "pro" ? "fill-primary stroke-black" : ""
          } stroke-slate-500`}
        />
        <span
          className={`btm-nav-label font-extralight text-sm ${
            activeTab === "pro" ? "text-black" : "text-gray-400"
          }`}
        >
          Profile
        </span>
      </button>
    </div>
  );
};
