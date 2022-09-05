import React, { memo, Suspense,lazy } from "react";
// import Carousel from "../../custom/carousel/carousel";
// import Navigation from "../../shared/navigation/navigation";
// import FlashSale from "../flashSale/flashSale";
// import SmallDetails from "../smallDetails/smallDetails";
// import Trending from "../trendingProduct/trending";

const Carousel = lazy(() => import("../../custom/carousel/carousel"));
const Navigation = lazy(() =>
  import("../../shared/navigation/navigation")
);
const FlashSale = lazy(() => import("../flashSale/flashSale"));
const SmallDetails = lazy(() => import("../smallDetails/smallDetails"));
const Trending = lazy(() => import("../trendingProduct/trending"));

const Home = memo(() => {
  return (
    <Suspense fallback={"Loading........"}>
      <Navigation />
      <Carousel />
      <div className="mx-auto lg:max-w-7xl">
        <Trending />
        <FlashSale />
        <SmallDetails />
      </div>
    </Suspense>
  );
});

export default Home;
