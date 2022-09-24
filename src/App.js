import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/shared/loader/loader';
import AuthProvider from './app/AuthProvider';
const MyOrder = lazy(() => import("./components/dashboard/myOrder/myOrder"));
const Voucher = lazy(() => import("./components/dashboard/voucher/voucher"));
const CategoryProducts = lazy(() => import("./components/home/categoryProducts"));
const Checkout = lazy(() => import("./components/cart/checkout/checkout"));
const DashboardHome = lazy(() => import("./components/dashboard/dashboardHome/dashboardHome"));
const Address = lazy(() => import("./components/dashboard/address/address"));
const PaymentOption = lazy(() => import("./components/dashboard/paymentOption/paymentOption"));
const Return = lazy(() => import("./components/dashboard/return/return"));
const Cancel = lazy(() => import("./components/dashboard/cancel/cancel"));
const Home = lazy(() => import('./components/home/home/home'));
const Login = lazy(() => import("./components/shared/login/login"));
const Register = lazy(() => import("./components/shared/register/register"));
const Cart = lazy(() => import("./components/cart/cart"));
const Profile = lazy(() => import("./components/dashboard/profile/profile"));
const PrivateRoute = lazy(() => import("./components/shared/privateRoute/privateRoute"));
// const SearchByCategory = lazy(() => import("./components/home/searchByCategory/searchByCategory"));


// const name = lazy(() => import(""));
// const name = lazy(() => import(""));
// const name = lazy(() => import(""));
const ProductDetail = React.lazy(() =>
  import('./components/home/productDetail/productDetail'),
);
function App() {
  console.log('render')
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
          <Route path="/search-by-category" element={< CategoryProducts />} />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
          <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />

          {/*  This is dashboard section.....  */}

          <Route
            path="/account"
            element={
              <PrivateRoute>
                <DashboardHome />
              </PrivateRoute>
            }
          >
            <Route path="my-profile" element={<Profile />} />
            <Route path="address" element={<Address />} />
            <Route path="payment-option" element={<PaymentOption />} />
            <Route path="return" element={<Return />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="my-orders" element={<MyOrder />} />
            <Route path="voucher" element={<Voucher />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={"Error Page"} />

        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
