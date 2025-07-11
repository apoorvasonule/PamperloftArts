
import mobileImage from '../assets/pixel-shop-mobile.png';
import desktopImage from '../assets/pixel-shop-expanded.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] bg-[#fef6f9] w-full overflow-hidden">
      {/* Clickable image */}
      <a href="/shop">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopImage} />
          <img
            src={mobileImage}
            alt="Pamperloft Pixel Shop"
            className="w-full h-auto object-cover cursor-pointer block"
          />
        </picture>
      </a>

      {/* Floating message */}
      <div className="absolute top-6 inset-x-0 flex justify-center z-10">
        <div className="animate-bounce text-center bg-white/80 px-4 py-2 rounded-full shadow-md border border-pink-300 font-pixel text-pink-700 text-xs sm:text-sm">
          Click on the shop to enter
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
