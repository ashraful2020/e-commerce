import React, { Suspense, useEffect } from "react";
import "./App.css";
import Home from "./components/home/home/home";
// const name = React.lazy(() => import(""));
// const name = React.lazy(() => import(""));
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
       <Home/>
      </Suspense>
    </div>
  );
}

export default App;
