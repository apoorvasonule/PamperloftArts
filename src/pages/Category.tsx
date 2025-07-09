import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import StickyCartBar from '../components/StickyCartBar';
import type { Product } from '../types/Product';

// Note: price is a string here initially
const dummyProducts: { [key: string]: { id: number; name: string; price: string; image: string }[] } = {
  keychains: [
    { id: 1, name: "Rainbow Charm", price: "₹99", image: "/products/rainbow.png" },
    { id: 2, name: "Cat Keychain", price: "₹89", image: "/products/cat.png" }
  ],
  kundan: [
    { id: 1, name: "Peacock Mandala", price: "₹199", image: "/products/peacock.png" }
  ],
  stickynotes: [
    { id: 1, name: "Frog Memo Pad", price: "₹49", image: "/products/frogpad.png" }
  ]
};

const sanitizePrice = (priceString: string): number => {
  // Remove ₹ and convert to number
  return parseFloat(priceString.replace(/[^\d.]/g, '')) || 0;
};

const Category = () => {
  const { name } = useParams<{ name: string }>();

  const rawProducts = name && dummyProducts[name] ? dummyProducts[name] : [];

  // Convert prices from string to number
  const products: Product[] = rawProducts.map(p => ({
    ...p,
    price: sanitizePrice(p.price)
  }));

  return (
    <>
      <Navbar />
      <section className="bg-[#fff0f5] min-h-screen p-4">
        <h1 className="text-center font-pixel text-2xl text-pink-700 mb-6 capitalize">
          {name?.replace('-', ' ') || 'Category'}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.length === 0 && (
            <p className="col-span-full text-center text-gray-600">No products yet!</p>
          )}
        </div>
      </section>
      <StickyCartBar />
    </>
  );
};

export default Category;
