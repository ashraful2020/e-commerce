import React, { Suspense, lazy } from 'react';
import Loader from '../../shared/loader/loader'; 
import Navigation from '../../shared/navigation/navigation';
const Carousel = lazy(() => import('../../custom/carousel/carousel'));
const FlashSale = lazy(() => import('../flashSale/flashSale'));
const SmallDetails = lazy(() => import('../smallDetails'));
const Trending = lazy(() => import('../trendingProduct/trending'));
const ProductCategory = lazy(() => import('../productCategory'));
const Category = lazy(() => import('../category'));
const LatestDeal = lazy(() => import('../latestDeal/latestDeal'));
const Footer = lazy(() => import("../../shared/footer/footer"));
// const  a = lazy(() => import(""));
// const  a = lazy(() => import(""));


const Home = () => {
  document.title = 'Amar Store';
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Carousel />
        <Category />
        <div className="mx-auto bg-white sm:w-11/12  lg:w-10/12">
          <SmallDetails />
          <Trending />
          <FlashSale />
          <LatestDeal />
          <ProductCategory />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
