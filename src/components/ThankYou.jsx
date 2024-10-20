import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const name = state.name;
  return (
    <section className="w-full flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white   shadow-2xl">
        <div className="bg-right-image bg-[length:120px_200px]  bg-no-repeat bg-right flex flex-col justify-around items-center text-center p-4 w-full">
          <button onClick={() => navigate("/")} className="place-self-end">
            x
          </button>

          <div className="w-full pb-4 mb-4 border-b">
            <p className="text-[#0F4811] text-base ">Your Cart</p>
          </div>
          <div className="py-4  flex flex-col items-center gap-6 ">
            <h1 className="text-[#165315] text-2xl font-semibold">
              Congratulations <br /> Order Placed!
            </h1>
            <img
              src="https://res.cloudinary.com/dr8jg61z3/image/upload/v1729350684/chaperone/plant_1_trde3y.png"
              className="w-24"
            />
          </div>
        </div>
        <div className="bg-left-image min-h-48 bg-white bg-[length:120px_200px]  bg-no-repeat bg-left flex flex-col justify-around items-center text-center p-4 w-full gap-2">
          <p className="text-[#165315]  text-base">
            Thank you for your interest in {name}!
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#165315] py-2 px-8 text-base font-semibold text-white"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
