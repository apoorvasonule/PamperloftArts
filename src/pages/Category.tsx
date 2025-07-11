import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import StickyCartBar from '../components/StickyCartBar';
import type { Product } from '../types/Product';
import CategoryTabs from '../components/CategoryTabs'; // 👈

const sanitizePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^\d.]/g, '')) || 0;
};

const Category = () => {
  const { name } = useParams<{ name: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await import(`../data/products/${name}.json`);
        const cleanedProducts = data.default.map((p: any) => ({
          ...p,
          price: sanitizePrice(p.price),
        }));
        setProducts(cleanedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
      }
    };

    if (name) {
      loadProducts();
    }
  }, [name]);

  return (
    <>
      <Navbar />
      <CategoryTabs /> 
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
