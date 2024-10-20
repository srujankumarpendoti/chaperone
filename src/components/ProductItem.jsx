/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddToCartModal from "./AddToCartModal";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { imageSrc, imageAlt, name, description, rating, oldPrice, price } =
    product;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleViewProduct = () => {
    navigate("/thankyou", { state: { name } });
  };
  return (
    <a className="max-md:w-32 flex flex-col gap-2 md:gap-8 mb-8 ">
      <div className="h-30 w-24 md:h-80 md:w-64 aspect-square flex flex-col justify-between items-center border">
        <button className="self-end">
          <CiHeart className=" text-lg md:text-3xl" />
        </button>
        <img className="h-20 md:h-48 xl:h-60" src={imageSrc} alt={imageAlt} />
        <button
          onClick={handleViewProduct}
          className="w-full h-5 md:h-9 text-white text-[10px] md:text-base font-semibold bg-[#165315] text-center"
        >
          View Product
        </button>
      </div>
      <div className="w-full flex flex-col gap-1">
        <h1 className="font-medium text-sm md:text-xl">{name}</h1>
        <p className="text-[10px] text-sm text-[#838383] max-sm:leading-tight max-md:w-2/3 max-md:text-wrap">
          {description}
        </p>
        <div className="flex items-center gap-1 md:gap-2">
          <img
            className="max-md:w-12"
            src="https://res.cloudinary.com/dr8jg61z3/image/upload/v1729333209/chaperone/image_10_idtlft.png"
            alt="rating"
          />
          <p className="font-medium text-xs md:text-base text-[#A5A1A1]">
            {rating}
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-4">
          <p className="text-xs md:text-base text-[#5E5A5AB2] line-through">
            {oldPrice}
          </p>
          <p className="text-[#5E5A5A] font-semibold text-sm md:text-xl">
            {price}
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-1">
          <button
            onClick={handleOpen}
            className="bg-[#165315] px-2 py-1 md:py-2 md:px-4 rounded-xl text-white font-semibold text-xs md:text-base min-w-24"
          >
            Add to cart
          </button>
          <button className="text-[#165315] px-2 py-1 md:py-2 md:px-4 rounded-xl border border-[#165315] font-medium text-xs md:text-base min-w-24">
            Buy on Rent
          </button>
          <AddToCartModal
            product={product}
            isOpen={open}
            onClose={handleClose}
          />
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
