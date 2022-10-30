import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './app/AuthProvider';
import Loader from './components/shared/loader/loader';
import dummyUser from './dummyUser';
import { routes } from './routes/routes';

const Home = lazy(() => import('./components/home/home/home'));
const Login = lazy(() => import("./components/shared/login/login"));
const Register = lazy(() => import("./components/shared/register/register"));
const Cart = lazy(() => import("./components/cart/cart"));
const PrivateRoute = lazy(() => import("./components/shared/privateRoute/privateRoute"));
const CategoryProducts = lazy(() => import("./components/home/categoryProducts"));
const Checkout = lazy(() => import("./components/cart/checkout/checkout"));
const DashboardHome = lazy(() => import("./components/dashboard/dashboardHome/dashboardHome"));
const UpdateProductType = lazy(() => import("./components/dashboard/merchant/updateProduct"));
const ProductDetail = React.lazy(() => import('./components/home/productDetail/productDetail'));
const filteredRoutes = routes.filter(route => route.roles.includes(dummyUser.role));


// const name = lazy(() => import(""));
// const name = lazy(() => import(""));

function App() {
  // http.get("/").then((res) => console.log(res));
  return (
    <AuthProvider className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={'About Page'} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/flash-product/:id" element={<ProductDetail />} />
          <Route path="/update-product/:id" element={<UpdateProductType />} />
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
            {
              filteredRoutes.map((route, _i) => {
                return (
                  route.element && (<Route path={route.path} element={route.element} key={_i} />)
                )
              })
            }
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
