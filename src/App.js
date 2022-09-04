import React, { Suspense, useEffect } from "react";
import "./App.css";
import Trending from "./components/home/trendingProduct/trending";
// import FlashSale from "./components/home/flashSale/flashSale";
import http from "./services/http.service";
const Navigation = React.lazy(() =>
  import("./components/shared/navigation/navigation")
);
const Carousel = React.lazy(() =>
  import("./components/custom/carousel/carousel")
);
const HomeInterface = React.lazy(() =>
  import("./components/home/homeInterface/homeInterface")
);
const FlashSale = React.lazy(() =>
  import("./components/home/flashSale/flashSale.js")
);
const SmallDetails = React.lazy(() =>
  import("./components/home/smallDetails/smallDetails")
);
// const name = React.lazy(() => import(""));
function App() {
  window.title = "Hello ";
  // useEffect(() => {
  //   window.title="Hello "
  //   http.get("").then((res) => console.log(res));
  // }, []);
  return (
    <div className="App">
      <Suspense fallback={"Loading........"}>
        <Navigation />
        <Carousel />
        <FlashSale />
        <SmallDetails />
        <Trending/>
      </Suspense>
    </div>
  );
}

export default App;
