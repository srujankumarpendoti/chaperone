import Footer from "./Footer";
import Header from "./Header";
import { IoSearchOutline } from "react-icons/io5";
import searchPic from "/searchPic.png";
import Products from "./Products";
import ResponsiveSlider from "./ResponsiveSlider";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Plants");
  return (
    <>
      <Header />
      <div className="w-full px-8 md:px-24 pb-12">
        <div className=" flex justify-center items-center mb-12">
          <div className=" m-4 flex items-center border-b border-black">
            <IoSearchOutline className="w-6 mr-2 text-black" />
            <input type="search" placeholder="Search Plant" />
            <img className="w-8" src={searchPic} alt="search-pic" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("Plants")}
              className={`w-30 w-28 px-4 py-1 text-base  md:text-xl ${
                activeTab === "Plants"
                  ? "bg-[#165315] shadow-xl font-semibold text-white"
                  : "border text-[#0000004D]"
              }`}
            >
              Plants
            </button>
            <button
              onClick={() => setActiveTab("Pots")}
              className={`w-30 w-28 px-4 py-1  text-base  md:text-xl ${
                activeTab === "Plants"
                  ? "border text-[#0000004D]"
                  : " bg-[#165315] shadow-xl font-semibold text-white"
              }`}
            >
              Pots
            </button>
          </div>
          <p className="text-[#838383] text-sm md:text-base">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        <ResponsiveSlider />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Home;
