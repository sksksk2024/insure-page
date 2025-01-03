import { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  // Toggle menu visibility
  const MenuStart = () => setIsHidden(!isHidden);

  return (
    <header>
      <section className="flex justify-around items-center w-screen h-64H py-32P bg-white">
        <img className="w-112W sm:w-128W" src={logo} alt="brand" />

        {/* Accessing the menu - Mobile */}
        <div
          className="relative cursor-pointer w-32W h-32H block lg:hidden"
          onClick={MenuStart}
        >
          {/* Hamburger Icon */}
          <img
            src={hamburger}
            alt="burger menu"
            className={`z-10 absolute inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-75 rotate-180 pointer-events-none'
            }`}
          />
          {/* Close (X) Icon */}
          <img
            src={close}
            alt="close menu"
            className={`absolute z-10 inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-0 scale-75 rotate-180 pointer-events-none'
                : 'opacity-100 scale-100 rotate-0'
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isHidden ? 'animate-comeOut cursor-none' : 'z-50 animate-comeIn'
          } absolute lg:hidden`}
        >
          <ul
            className={`translate-y-8 -translate-x-1/2 animate-fade absolute flex flex-col justify-start items-center gap-4 font-bold text-white text-lg w-[100dvw] h-[92dvh] p-32P bg-very-dark-violet background ${
              isHidden && 'select-none overflow-y-clip'
            }`}
          >
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-white hover:text-black"
              >
                Product
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-white hover:text-black"
              >
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-white hover:text-black"
              >
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button className="text-white uppercase py-8P px-16P w-[50dvw] border-2 border-solid border-white text-white hover:text-black hover:border-black hover:bg-white">
                View Plans
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="relative hidden lg:flex gap-8 font-bold text-md p-16P">
          <ul className="flex items-center gap-8 text-white">
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-grayish-blue hover:text-black"
              >
                Product
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-grayish-blue hover:text-black"
              >
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-grayish-blue hover:text-black"
              >
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button className="text-black uppercase hover:text-white hover:bg-black border-2 border-solid border-black px-16P py-8P text-black hover:text-black hover:border-black">
                View Plans
              </button>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
