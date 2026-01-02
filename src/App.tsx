import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioLanding from './components/Home';
import Shopifypage from './components/Shopifypage';
import Work from './components/Portfolio';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/shopify" element={<Shopifypage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

