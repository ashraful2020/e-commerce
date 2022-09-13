import React, {Suspense} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
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
    <div className="App">
      <Suspense fallback={'Loading........'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={'About Page'} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="contact" element={'contact Page'} />
          <Route path="cart" element={'cart Page'} />
          <Route path="account" element={'cart Page'} />
          <Route path="category" element={'Category Page'} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
