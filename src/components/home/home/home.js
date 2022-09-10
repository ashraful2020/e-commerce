import React, { memo, Suspense, lazy } from "react";
import Footer from "../../shared/footer/footer";
 

const Navigation = lazy(() => import("../../shared/navigation/navigation"));
const Carousel = lazy(() => import("../../custom/carousel/carousel"));
const FlashSale = lazy(() => import("../flashSale/flashSale"));
const SmallDetails = lazy(() => import("../smallDetails/smallDetails"));
const Trending = lazy(() => import("../trendingProduct/trending"));
const CategoryProduct = lazy(() =>
  import("../categoryProduct/categoryProduct")
);
const Category = lazy(() => import("../category/category"));
const LatestDeal = lazy(() => import("../latestDeal/latestDeal"));
// const  a = lazy(() => import(""));
const Home = memo(() => {
  return (
    <Suspense fallback={"Loading........"}>
        {/* <Navigation /> */}
       <Carousel />
      {/* <Category />
      <div className="mx-auto lg:w-10/12 sm:w-11/12  bg-white">
      
        <SmallDetails />
        <Trending />
        <FlashSale />
        <CategoryProduct />
      <LatestDeal />
      </div>   */}
        <Footer/>
  
    </Suspense>
  );
});

export default Home;
