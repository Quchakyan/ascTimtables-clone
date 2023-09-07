import './App.css'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Order from './pages/Order';
import { useOrder } from './hooks/OrderContext.hook';
import ScrollUp from "./UI/scroll-up/ScrollUp";

function App() {
  const {price, type} = useOrder();
  return (
    <>
    <div id='main'>
    <ScrollUp />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
    </div>
    <Footer />
    </>
  )
}

export default App
