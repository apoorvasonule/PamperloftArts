import  { useState } from "react";
import Navbar from "../components/Navbar";
import billingCounterImg from "../assets/billing-counter.png";
import billingCounterMobileImg from "../assets/billing-counter-mobile.png";
import CartItems from "../components/CartItems"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [showCart, setShowCart] = useState(false); // State to toggle cart items
const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-[#fef6f9] overflow-hidden">
        {/* Background Image */}
          <img
          src={billingCounterImg}
          alt="Billing Counter Desktop"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Background Image for Mobile */}
        <img
          src={billingCounterMobileImg}
          alt="Billing Counter Mobile"
          className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Over Background */}
        <div className="relative z-10 px-4 py-6">
          {!showCart ? (
            <div className="bg-white/80 p-4 rounded-lg shadow-md max-w-md mt-4 mx-auto sm:ml-4 sm:mr-0">
              <h2 className="text-xl font-semibold text-pink-700 mb-4 font-pixel">
                Check your cart items
              </h2>
              <div className="flex justify-between gap-4">
                <button
                  className="bg-pink-200 text-pink-900 font-pixel px-4 py-2 rounded-md hover:bg-pink-300 transition"
                  onClick={() => setShowCart(true)}
                >
                  See Cart
                </button>
                <button className="bg-pink-600 text-white font-pixel px-4 py-2 rounded-md hover:bg-pink-700 transition animate-bounce-slow"
                onClick={() => navigate('/checkout')}>
                  Buy Now
                </button>
              </div>
            </div>
          ) : (
             <CartItems goBack={() => setShowCart(false)} />
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
