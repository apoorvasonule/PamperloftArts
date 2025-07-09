import { useCart } from '../context/CartContext';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const quantity = cartItems[product.id]?.quantity || 0;

  return (
    <div className="bg-white border-4 border-pink-300 rounded-none p-2 hover:translate-y-[-2px] transition-all duration-300 shadow-[4px_4px_0_0_rgba(219,112,147,0.7)]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-contain mb-2 border-2 border-pink-200"
      />
      <h3 className="font-pixel text-sm text-pink-800 mb-1">{product.name}</h3>

      {/* Price and button/counter on same row */}
      <div className="flex justify-between items-center">
        <p className="font-pixel text-xs text-pink-700">{product.price}</p>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-300 text-pink-900 font-pixel text-xs py-1 px-2 rounded hover:bg-pink-400 transition-all"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-pink-200 px-2 py-1 text-pink-800 text-xs font-bold rounded hover:bg-pink-300"
            >
              −
            </button>
            <span className="font-pixel text-sm text-pink-800">{quantity}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-200 px-2 py-1 text-pink-800 text-xs font-bold rounded hover:bg-pink-300"
            >
              ＋
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
