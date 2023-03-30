import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Products' element={<ProductPage />} />
        <Route path='/Products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
