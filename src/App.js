import React, {Suspense} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AuthProvider from './app/AuthProvider';
import Login from './components/shared/login/login';
import Register from './components/shared/register/register';
const Home = React.lazy(() => import('./components/home/home/home'));
const ProductDetail = React.lazy(() =>
  import('./components/home/productDetail/productDetail'),
);
// const name = React.lazy(() => import(""));
// const name = React.lazy(() => import(""));
// const name = React.lazy(() => import(""));
function App() {
  window.title = 'Hello ';
  // useEffect(() => {
  window.title = 'Hello ';
  //   http.get("").then((res) => console.log(res));
  // }, []);
  return (
    <AuthProvider className="App"> 
      <Suspense fallback={'Loading........'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={'About Page'} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="contact" element={'contact Page'} />
          <Route path="cart" element={'cart Page'} />
          <Route path="account" element={'cart Page'} />
          <Route path="category" element={'Category Page'} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
