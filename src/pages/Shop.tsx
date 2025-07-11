import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PixelButton from '../components/PixelButton';
import SalesGirlMessage from '../components/SalesGirlMessage';
import shopInteriorMobile from '../assets/shop-interior-mobile.png';
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
        <div
  className={`
    absolute
    left-1/2 -translate-x-1/2
    flex lg:flex-row flex-wrap justify-center
    gap-3 sm:gap-4
    w-[95%] max-w-4xl
    ${window.innerWidth < 1024 ? 'top-[28%]' : 'top-1/3'}
  `}
>
  <PixelButton
    label="Keychains & Charms"
    onClick={() => navigate('/category/keychains')}
    className="w-[45%] lg:w-auto px-4 py-2 text-xs sm:text-sm lg:text-base text-center leading-tight break-words max-w-[220px]"
  />
  <PixelButton
    label="Kundan Mandalas"
    onClick={() => navigate('/category/kundan')}
    className="w-[45%] lg:w-auto px-4 py-2 text-xs sm:text-sm lg:text-base text-center leading-tight break-words max-w-[220px]"
  />
  <PixelButton
    label="Memopads & Sticky notes"
    onClick={() => navigate('/category/stickynotes')}
    className="w-[45%] lg:w-auto px-4 py-2 text-xs sm:text-sm lg:text-base text-center leading-tight break-words max-w-[220px]"
  />
</div>


        {/* Sales Girl Typing Message */}
        <SalesGirlMessage />
      </section>
      <StickyCartBar />
    </>
  );
};

export default Shop;
