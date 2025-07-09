import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { CartItem } from "../context/CartContext"; // Import type if declared here
// Import type if declared here

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const items = Object.values(cartItems) as CartItem[];

  const totalAmount = items.reduce((total, item) => {
    const cleanPrice = Number(item.price.toString().replace(/[^\d.]/g, ""));
    return total + cleanPrice * item.quantity;
  }, 0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    pincode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, address, phone, email, pincode } = formData;

    const itemsList = items
      .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price} each`)
      .join("\n");

    const message = `Hello! I’d like to place an order 💫

Items:
${itemsList}

Total: ₹${totalAmount}

Name: ${name}
Address: ${address}
Pincode: ${pincode}
Phone: ${phone}
Email: ${email}`;

    const whatsappNumber = "9518759654"; // replace with your actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    navigate("/thankyou");
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#fff0f5] pt-24 px-4 pb-10">
        <div className="bg-white/80 p-6 rounded-lg max-w-3xl mx-auto shadow-md">
          <h2 className="text-2xl font-pixel text-pink-700 mb-6 text-center">
            🛍️ Confirm Your Purchase
          </h2>

          {/* Cart Items List */}
          {items.length > 0 ? (
            <ul className="space-y-4 mb-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-pink-100 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-pink-800 font-pixel text-base">
                      {item.name}
                    </h3>
                    <p className="text-sm text-pink-700">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-pink-900">
                    ₹
                    {Number(item.price.toString().replace(/[^\d.]/g, "")) *
                      item.quantity}
                  </p>
                </li>
              ))}
              <li className="text-right text-lg text-pink-800 font-pixel mt-4">
                Total Amount: ₹{totalAmount}
              </li>
            </ul>
          ) : (
            <p className="text-pink-900 font-pixel text-sm">
              Your cart is empty.
            </p>
          )}

          {/* Billing Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-pixel text-pink-800 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 rounded bg-pink-50 border border-pink-300 font-pixel"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div>
              <label className="font-pixel text-pink-800 block mb-1">
                Address
              </label>
              <textarea
                name="address"
                required
                className="w-full p-2 rounded bg-pink-50 border border-pink-300 font-pixel"
                rows={3}
                onChange={handleChange}
                value={formData.address}
              />
            </div>
            <div>
              <label className="font-pixel text-pink-800 block mb-1">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                required
                pattern="^[1-9][0-9]{5}$"
                maxLength={6}
                className="w-full p-2 rounded bg-pink-50 border border-pink-300 font-pixel"
                onChange={handleChange}
                value={formData.pincode}
              />
            </div>

            <div>
              <label className="font-pixel text-pink-800 block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                className="w-full p-2 rounded bg-pink-50 border border-pink-300 font-pixel"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div>
              <label className="font-pixel text-pink-800 block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 rounded bg-pink-50 border border-pink-300 font-pixel"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-pink-600 text-white font-pixel px-6 py-3 rounded-lg hover:bg-pink-700 transition animate-bounce-slow"
              >
                Confirm Purchase
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
