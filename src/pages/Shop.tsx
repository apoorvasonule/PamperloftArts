import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PixelButton from '../components/PixelButton';
import SalesGirlMessage from '../components/SalesGirlMessage';
import shopInteriorMobile from '../assets/shop-interior.png';
import shopInteriorExpanded from '../assets/shop-interior-expanded.png';
import { useNavigate } from 'react-router-dom';
import StickyCartBar from '../components/StickyCartBar';

const Shop = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = isMobile ? shopInteriorMobile : shopInteriorExpanded;

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-[#fef6f9] m-0 p-0 overflow-hidden">
        <img
          src={imageSrc}
          alt="Inside Pamperloft Shop"
          className="w-full h-auto block"
        />

        {/* Floating Pixel Buttons */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-4 flex-wrap justify-center">
          <PixelButton label="Keychains & Charms" onClick={() => navigate('/category/keychains')} />
  <PixelButton label="Kundan Mandalas" onClick={() => navigate('/category/kundan')} />
  <PixelButton label="Memopads & Stickynotes" onClick={() => navigate('/category/stickynotes')} />

        </div>

        {/* Sales Girl Typing Message */}
        <SalesGirlMessage />
      </section>
      <StickyCartBar />
    </>
  );
};

export default Shop;
