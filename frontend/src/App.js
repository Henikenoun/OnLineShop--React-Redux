import {BrowserRouter , Route  , Routes} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route end path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
