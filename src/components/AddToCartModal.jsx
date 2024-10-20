/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const AddToCartModal = ({ isOpen, onClose, product }) => {
  const { imageSrc, imageAlt, name, description, price } = product;
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/thankyou", { state: { name } });
  };
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   width: "100%",
      //   height: "100%",
      //   background: "rgba(0, 0, 0, 0.5)",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <div
        className="bg-white border-2 rounded-lg border-white min-w-fit min-h-fit m-auto p-8 shadow-lg"
        // style={{
        //   background: "white",
        //   height: 150,
        //   width: 240,
        //   margin: "auto",
        //   padding: "2%",
        //   border: "2px solid #000",
        //   borderRadius: "10px",
        //   boxShadow: "2px solid black",
        // }}
      >
        <div className=" flex flex-col justify-between items-center">
          <img className="h-24" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-medium text-xl">{name}</h1>
          <p className="text-sm text-[#838383]">{description}</p>
          {/* <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dr8jg61z3/image/upload/v1729333209/chaperone/image_10_idtlft.png"
              alt="rating"
            />
            <p className="font-medium text-base text-[#A5A1A1]">{rating}</p>
          </div> */}
          <div className="flex items-center gap-4">
            <p className="text-[#5E5A5A] font-semibold text-xl">{price}</p>
          </div>

          <h1 className="font-semibold text-red-500">
            Are you sure you want to add this product to your cart?
          </h1>
          <div className="w-full flex justify-center gap-2">
            <button
              onClick={handleYes}
              className="bg-[#165315] py-2 px-4 rounded-xl text-white font-semibold text-base"
            >
              Yes
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-[#165315] py-2 px-4 rounded-xl text-white font-semibold text-base"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
