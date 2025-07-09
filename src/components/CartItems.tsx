import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartItems = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const items = Object.values(cartItems);

  return (
    <div className="min-h-screen p-6 pt-24 bg-[url('/billing-counter.png')] bg-cover bg-center">
      <div className="bg-white/80 p-6 rounded-lg max-w-2xl mx-auto shadow-md">
        <h2 className="text-2xl font-pixel text-pink-700 mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p className="text-pink-900 font-pixel text-sm">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-pink-100 p-4 rounded-lg"
              >
                <div>
                  <h3 className="text-pink-800 font-pixel text-base">{item.name}</h3>
                  <p className="text-sm text-pink-700">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-pink-300 px-2 rounded font-bold text-white"
                    onClick={() => removeFromCart(item.id)}
                  >
                    –
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="bg-pink-500 px-2 rounded font-bold text-white"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              className="bg-pink-600 text-white font-pixel px-6 py-3 rounded-lg hover:bg-pink-700 transition animate-bounce-slow"
              onClick={() => navigate('/checkout')}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
