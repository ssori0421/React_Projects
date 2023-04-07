import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './page/ProductListPage';
import SignInPage from './page/SignInPage';
import Navbar from './component/Navbar';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route
          path='/signin'
          element={
            <SignInPage
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          } //setAuthenticate 험수를 props로 전달
        />
        <Route
          path='/product/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
