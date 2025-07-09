import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Cart from './pages/BillingCounter';
import Checkout from './pages/Checkout';
import ThankYou from './pages/Thankyou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
