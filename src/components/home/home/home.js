import React, { memo, Suspense, lazy } from 'react';
import Loader from '../../shared/loader/loader'; 
const Navigation = lazy(() => import('../../shared/navigation/navigation'));
const Carousel = lazy(() => import('../../custom/carousel/carousel'));
const FlashSale = lazy(() => import('../flashSale/flashSale'));
const SmallDetails = lazy(() => import('../smallDetails/smallDetails'));
const Trending = lazy(() => import('../trendingProduct/trending'));
const CategoryProduct = lazy(() =>
  import('../categoryProduct/categoryProduct'),
);
const Category = lazy(() => import('../category/category'));
const LatestDeal = lazy(() => import('../latestDeal/latestDeal'));
const Footer = lazy(() => import("../../shared/footer/footer"));
// const  a = lazy(() => import(""));
// const  a = lazy(() => import(""));
// const  a = lazy(() => import(""));
const Home = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Navigation />
      <Carousel />
      <Category />
      <div className="mx-auto bg-white sm:w-11/12  lg:w-10/12">
        <SmallDetails />
        <Trending />
        <FlashSale />
        <LatestDeal />
        <CategoryProduct />
      </div>
      <Footer />
    </Suspense>
  );
} ;

export default Home;
