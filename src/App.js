import React, { useEffect } from "react";
import "./App.css";
import HomeInterface from "./components/home/homeInterface/homeInterface";
import http from "./services/http.service";
const Navigation = React.lazy(() =>
  import("./components/shared/navigation/navigation")
);
const Carousel = React.lazy(() =>
  import("./components/custom/carousel/carousel")
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
      <Navigation />
      <Carousel />
      <HomeInterface/>
    </div>
  );
}

export default App;
