import React, { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../../shared/navigation/navigation'));
const Carousel = lazy(() => import('../../custom/carousel/carousel'));
const FlashSale = lazy(() => import('../flashSale'));
const SmallDetails = lazy(() => import('../smallDetails'));
const Trending = lazy(() => import('../trendingProduct/trending'));
const ProductCategory = lazy(() =>import('../productCategory'));
const Category = lazy(() => import('../category'));
const LatestDeal = lazy(() => import('../latestDeal'));
const Footer = lazy(() => import("../../shared/footer/footer"));
const  Loader = lazy(() => import("../../shared/loader/loader"));
// const  a = lazy(() => import(""));
// const  a = lazy(() => import(""));
const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Carousel />
        <Category />
        <div className="mx-auto bg-white sm:w-11/12  lg:w-10/12">
          <SmallDetails />
          <Trending />
          <FlashSale />
          <LatestDeal />
          <ProductCategory />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
