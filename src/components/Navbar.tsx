
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-pink-200 shadow-md py-4 px-6 flex justify-between items-center flex-wrap">
      <Link to="/">
        <h1 className="font-pixel text-pink-800 text-xs sm:text-base cursor-pointer">
          Pamperloft Arts
        </h1>
      </Link>
      <ul className="flex gap-3 sm:gap-4 text-[10px] sm:text-sm font-pixel text-pink-900">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><a href="#">About</a></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
