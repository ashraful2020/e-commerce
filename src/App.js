import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './app/AuthProvider';   
const Home = lazy(() => import('./components/home/home'));
const Login = lazy(() => import("./components/shared/login/login"));
const Register = lazy(() => import("./components/shared/register/register"));
const Cart = lazy(() => import("./components/cart/cart"));
const Profile = lazy(() => import("./components/shared/profile/profile"));
const PrivateRoute = lazy(() => import("./components/shared/privateRoute/privateRoute"));
const SearchByCategory = lazy(() => import("./components/home/searchByCategory/searchByCategory"));
const Loader = lazy(() => import("./components/shared/loader/loader"));
// const name = lazy(() => import(""));
// const name = lazy(() => import(""));
const ProductDetail = React.lazy(() =>
  import('./components/home/productDetail/productDetail'),
);
function App() { 
  // http.get("/product").then((res) => console.log(res)); 
  // http.get("/product/632056db75cb9a5e1ada159e").then((res) => console.log(res)); 
  // http.get("/category").then((res) => console.log(res)); 
  // http.get("/flash-product").then((res) => console.log(res)); 
  // http.get("/latest-deal").then((res) => console.log(res)); 
  // http.get("/search-by-category").then((res) => console.log(res)); 
  // http.get("/").then((res) => console.log(res)); 

  // ? http://localhost:3000/category?q=categoryName
  return (
    <AuthProvider className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={'About Page'} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/flash-product/:id" element={<ProductDetail />} />
          <Route path="/latest-deal/:id" element={<ProductDetail />} />
          <Route path="/contact" element={'contact Page'} />
          <Route path="/search-by-category" element={'search-by-category'} />
          <Route path="/cart" element={<PrivateRoute>
            <Cart />
          </PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute>
            <Profile />
          </PrivateRoute>} />
          <Route path="/category" element={<SearchByCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={"Error Page"} />

        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
