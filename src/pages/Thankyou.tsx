import { useNavigate } from "react-router-dom";
import thankyouImg from "../assets/thankyou.png"; // your cats thankyou image

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6f9] p-4">
      {/* Bouncing Thank You Image */}
      <img
        src={thankyouImg}
        alt="Thank You"
        className="w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] animate-softBounce mb-8 object-contain"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/shop")}
          className="bg-pink-300 border-4 border-pink-600 text-pink-900 font-pixel px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 hover:border-pink-700 transition duration-200 active:translate-y-1"
        >
          Shop More
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-300 border-4 border-pink-600 text-pink-900 font-pixel px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 hover:border-pink-700 transition duration-200 active:translate-y-1"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/about")}
          className="bg-pink-300 border-4 border-pink-600 text-pink-900 font-pixel px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 hover:border-pink-700 transition duration-200 active:translate-y-1"
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
