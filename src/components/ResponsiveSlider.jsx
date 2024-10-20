import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slides } from "../constants";

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideCount = slides.length;
  const slidesToShow = 5;
  const slidesToScroll = 2;

  const nextSlide = () => {
    if (sliderRef.current) {
      const maxIndex = slideCount - slidesToShow;
      const newIndex = Math.min(currentSlide + slidesToScroll, maxIndex);
      setCurrentSlide(newIndex);

      const slideWidth = sliderRef.current.offsetWidth / slidesToShow;

      sliderRef.current.scrollLeft = newIndex * slideWidth;
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(currentSlide - slidesToScroll, 0);
      setCurrentSlide(newIndex);
      const slideWidth = sliderRef.current.offsetWidth / slidesToShow;
      sliderRef.current.scrollLeft = newIndex * slideWidth;
    }
  };

  return (
    <div className="relative w-full overflow-hidden mb-20">
      <h1 className=" font-medium text-lg md:text-2xl my-8">Nursury</h1>
      <div
        className="flex transition-all duration-300  overflow-x-hidden gap-4 px-4 md:px-8"
        ref={sliderRef}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 md:w-1/6 flex flex-col justify-center items-center gap-4 md:gap-8 text-center"
          >
            <img
              src={slide.image}
              alt={slide.altName}
              className="w-24 md:w-32"
            />
            <p className="text-xs md:text-sm font-medium text-[#838383]">
              {slide.textName}
            </p>
          </div>
        ))}
        {/* Your slide content here */}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className=" w-9 h-9 flex justify-center items-center text-white rounded-full bg-black/50 cursor-pointer"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className=" w-9 h-9 flex justify-center items-center text-white rounded-full bg-black/50 cursor-pointer"
          onClick={nextSlide}
          disabled={currentSlide >= slideCount - slidesToShow}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
