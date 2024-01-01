import { useState } from "react";
import { Hamburger } from "../assets";

export const DrawerMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);

  return (
    <div className="lg:hidden drawer">
      <input
        id="side-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
      />
      <div className="drawer-content z-50">
        {/* Page content here */}
        <label htmlFor="side-drawer" className="drawer-button" onClick={toggle}>
          <Hamburger />
        </label>
      </div>
      <div className="drawer-side z-50">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-semibold">
          {/* Sidebar content here */}
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Women</a>
          </li>
          <li>
            <a>Accessories</a>
          </li>
          <li className="flex align-middle justify-center bg-primary rounded">
            <button onClick={toggle}>Close</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerMenu;
