import { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../assets/hamburger.png'; // Update with actual path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-pink-200 shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/">
        <h1 className="font-pixel text-pink-800 text-xs sm:text-base cursor-pointer">
          Pamperloft Arts
        </h1>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-3 sm:gap-4 text-[10px] sm:text-sm font-pixel text-pink-900">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><a href="#">About</a></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="sm:hidden relative">
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <ul className="absolute right-0 top-full mt-2 w-40 bg-pink-100 rounded-md shadow-lg text-pink-900 font-pixel text-sm z-50">
            <li className="px-4 py-2 border-b border-pink-300">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="px-4 py-2 border-b border-pink-300">
              <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
            <li className="px-4 py-2 border-b border-pink-300">
              <a href="#" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className="px-4 py-2">
              <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
