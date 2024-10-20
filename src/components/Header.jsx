import Banner from "./Banner";
import { GoPerson } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Plants & Pots");
  const [isExpand, setIsExpand] = useState(false);
  const handleActiveTab = (item) => {
    setActiveTab(item);
    setIsExpand(!isExpand);
  };
  const handleMenu = () => {
    setIsExpand(!isExpand);
  };

  return (
    <section className="">
      <Banner />

      <nav className="w-full flex justify-between items-center px-6 xl:px-12 py-1 md:py-2 md:h-24 gap-8 xl:gap-12">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dr8jg61z3/image/upload/v1729327606/chaperone/logo_xzrkzv.png"
            alt="logo"
            className="w-10 md:w-12 xl:14 "
          />
          <h1 className="text-[#0F4811] font-semibold text-base md:text-lg xl:text-2xl">
            Chaperone
          </h1>
        </Link>
        <div className="flex justify-between items-center gap-8 md:hidden cursor-pointer">
          <GoPerson className="text-lg" />
          <button onClick={handleMenu} className="">
            {!isExpand ? <GiHamburgerMenu /> : <IoMdCloseCircleOutline />}
          </button>
        </div>

        {/* Large Devices View */}
        <ul className="w-2/3 hidden md:flex justify-center  items-center gap-2 lg:gap-4 xl:gap-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className={`${
                activeTab === item && "text-[#F3A939]"
              } flex flex-col items-center cursor-pointer`}
            >
              <a
                className="flex justify-start items-end text-sm lg:text-base"
                onClick={() => setActiveTab(item)}
              >
                {item}{" "}
              </a>
              {activeTab === item && (
                <p className="border-t w-8 border-[#F3A939] "></p>
              )}
            </li>
          ))}
        </ul>
        <div className=" hidden md:flex items-end gap-2  xl:gap-6 font-medium cursor-pointer">
          <div className="w-full flex flex-col justify-end items-center">
            <GoPerson className="text-lg md:text-xl xl:text-2xl" />
            <span className="text-xs lg:text-base ">My Profile</span>
          </div>
          <div className="w-12 flex flex-col justify-end items-center">
            <div className="flex flex-col justify-end items-end p-0 leading-none">
              <p className="bg-[#F3A939] rounded-full w-3 lg:w-5 lg:h-5 h-3 text-white flex justify-center items-center text-[8px] lg:text-xs ">
                3
              </p>
              <BsCart className="text-lg md:text-xl xl:text-2xl" />
            </div>

            <span className="text-xs lg:text-base ">Cart</span>
          </div>
        </div>
      </nav>

      {/* Small Devices View */}
      {isExpand && (
        <ul className="flex flex-col md:hidden  items-end gap-1 font-medium px-6">
          {navItems.map((item) => (
            <li
              key={item}
              className={`${
                activeTab === item && "text-[#F3A939]"
              } flex flex-col items-center cursor-pointer`}
            >
              <a
                className="flex justify-start items-end text-sm"
                onClick={() => handleActiveTab(item)}
              >
                {item}{" "}
              </a>
              {activeTab === item && (
                <p className="border-t w-8 border-[#F3A939] "></p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Header;
