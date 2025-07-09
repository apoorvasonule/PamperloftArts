import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import cartIcon from "../assets/cart.png";

const StickyCartBar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Calculate total quantity
  const totalItems = Object.values(cartItems).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Hide bar if cart is empty
  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-pink-200 border-t-4 border-pink-300 shadow-lg flex justify-between items-center px-4 py-2 z-50">
      {/* Left - Encouraging text */}
      <p className="font-pixel text-xs sm:text-sm text-pink-900">
        You’ve got goodies waiting!
      </p>

      {/* Right - Cart icon + badge + CTA */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <div className="relative">
          <img src={cartIcon} alt="Cart" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white font-bold text-[10px] px-1 rounded-full">
            {totalItems}
          </span>
        </div>

        <button className="font-pixel text-[10px] sm:text-sm text-white bg-pink-500 px-2 sm:px-4 py-1 rounded shadow-md animate-softBounce hover:bg-pink-600 transition">
          Let’s go to billing counter →
        </button>
      </div>
    </div>
  );
};

export default StickyCartBar;
