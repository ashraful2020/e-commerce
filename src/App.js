import React, { Suspense, useEffect } from "react";
import "./App.css";
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
// const name = React.lazy(() => import(""));
// const name = React.lazy(() => import(""));
// const name = React.lazy(() => import(""));
function App() {
  useEffect(() => {
    http.get("").then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <Suspense fallback={"Loading........"}>
        <Navigation />
        <Carousel />
        <HomeInterface />
      </Suspense>
    </div>
  );
}

export default App;
