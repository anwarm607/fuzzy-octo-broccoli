import { SearchInput } from "./SearchInput";
import AccountIcon from "../assets/account.svg?react";
import WishIcon from "../assets/wishlist.svg?react";
import CartIcon from "../assets/cart.svg?react";
import DrawerMenu from "./DrawerMenu";
import { SearchIcon } from "../assets";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3.5 border-b border-b-gray-200 bg-primary lg:bg-white">
      <div className="flex space-x-8 items-center">
        <div className="flex items-center space-x-3">
          <DrawerMenu />
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-24 lg:w-32 md:w-44 sm:w-24 w"
          />
        </div>
        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8 font-medium text-sm">
          <a href="#" className="text-black ">
            Men
          </a>
          <a href="#" className="text-black">
            Women
          </a>
          <a href="#" className="text-black">
            Accessories
          </a>
        </div>
      </div>
      <div className="lg:flex space-x-6 items-center">
        <div className="hidden lg:block">
          <SearchInput />
        </div>
        {/* Navigation Links */}
        <div className="space-x-6 font-medium text-sm">
          <ul className="flex space-x-6">
            <li className="lg:hidden items-center space-x-2">
              <a href="#" className="text-black flex items-center space-x-1">
                <SearchIcon className="fill-black" />
                <div className="hidden lg:block">
                  <p>Search</p>
                </div>
              </a>
            </li>
            <li className="hidden lg:flex items-center space-x-2">
              <a href="#" className="text-black flex items-center space-x-1">
                <AccountIcon />
                <div className="hidden lg:block">
                  <p>Account</p>
                </div>
              </a>
            </li>
            <li className="flex items-center  space-x-2">
              <a href="#" className="text-black flex items-center space-x-1">
                <WishIcon />
                <div className="hidden lg:block">
                  <p>Wishlist</p>
                </div>
              </a>
            </li>
            <li className="flex items-center  space-x-2">
              <a href="#" className="text-black flex items-center space-x-1">
                <CartIcon />
                <div className="hidden lg:block">
                  <p>Cart</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
