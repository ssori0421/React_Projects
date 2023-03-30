import { useState } from 'react';
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import SignInPage from './page/SignInPage';
import UserPage from './page/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // authenticate 값이 true이면 로그인 한 거라고 가정!
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to='/signin' />;
  };
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
