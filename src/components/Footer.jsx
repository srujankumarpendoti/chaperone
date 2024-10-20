import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#F0FFE5] w-full p-12 ">
      <div className="w-full flex flex-col md:flex-row justify-between  gap-4 md:gap-2">
        <div className="w-full md:w-3/12 flex flex-col items-start max-md:gap-0 ">
          <h2 className="font-medium text-lg md:text-2xl mb-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <div className="gap-1 md:gap-3 flex flex-col items-start">
            <p className="footer-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <input
              className="py-2 px-4 border w-full"
              type="text"
              placeholder="Enter your email address "
            />
            <button className="bg-[#247822] text-white px-4 md:px-8 py-2 rounded-full font-semibold text-xs md:text-base">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between  gap-4 md:gap-2">
          <div className="max-md:w-2/5 flex flex-col ">
            <h2 className="font-medium text-sm md:text-2xl mb-2 md:mb-4">
              ABOUT US
            </h2>
            <div className="gap-3 flex flex-col">
              <a className="footer-text">Our Story</a>
              <a className="footer-text">Blogs</a>
              <a className="footer-text">Careers</a>
              <a className="footer-text">Contact Us</a>
              <a className="footer-text">Help & Support</a>
            </div>
          </div>
          <div className="max-md:w-2/5 flex flex-col ">
            <h2 className="font-medium text-sm md:text-2xl mb-2 md:mb-4">
              OUR SERVICES
            </h2>
            <div className="gap-3 flex flex-col">
              <a className="footer-text">Book Maali</a>
              <a className="footer-text">Plant Day Care</a>
              <a className="footer-text">Rent Plants</a>
              <a className="footer-text">Plants & Pots</a>
              <a className="footer-text">Gardening Tools</a>
            </div>
          </div>
          <div className="max-md:w-2/5 flex flex-col ">
            <h2 className="font-medium text-sm md:text-2xl mb-2 md:mb-4">
              USEFUL LINKS
            </h2>
            <div className="gap-3 flex flex-col">
              <a className="footer-text">Gardening Tools</a>
              <a className="footer-text">Orders & Returns</a>
              <a className="footer-text">Track Order</a>
              <a className="footer-text">Terms & Conditions</a>
              <a className="footer-text">Privacy Policy</a>
              <a className="footer-text">Return, Refund & Replacement Policy</a>
            </div>
          </div>
          <div className="max-md:w-2/5 md:w-1/6 flex flex-col ">
            <h2 className="font-medium text-sm md:text-2xl mb-2 md:mb-4">
              GET IN TOUCH
            </h2>
            <div className="gap-3 flex flex-col">
              <a className="footer-text">
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                Gurgaon, Haryana, India 122003
              </a>
              <a className="footer-text">Call: +919958287272</a>
              <a className="footer-text">Email: care@chaperoneplants.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:block">
        <div className="my-4">
          <h2 className="font-medium text-lg md:text-2xl my-2">CHAPERONE</h2>
          <p className="text-xs md:text-base text-[#838383]">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="font-medium text-lg md:text-2xl mb-2 md:mb-4">
            Follow us on
          </h2>
          <div className="flex items-center gap-4">
            <a
              className="cursor-pointer text-lg md:text-2xl"
              href="https://www.instagram.com/chaperoneplants/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="cursor-pointer text-lg md:text-2xl"
              href="https://www.facebook.com/?_rdr"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="cursor-pointer text-lg md:text-2xl"
              href="https://www.threads.net/login"
              target="_blank"
            >
              <FaSquareThreads />
            </a>
            <a
              className="cursor-pointer text-lg md:text-2xl"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              className="cursor-pointer text-lg md:text-2xl"
              href="https://www.linkedin.com/company/chaperone-plants/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <hr />
        <p className="text-[#0000004D] text-xs md:text-base mt-4">
          © 2023, chaperone.com All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
