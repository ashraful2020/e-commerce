import React from "react";
// import { useSelector } from "react-redux";
import Footer from "../components/shared/footer/footer";
import Navigation from "../components/shared/navigation/navigation";
 

const withLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    // const { loading } = useSelector((state) => state.posts);
    return (
      <div>
        <Navigation />

        <div className="min-h-[450px]">
          <PageComponent {...props} />
        </div> 
        <Footer />
      </div>
    );
  };
};

export default withLayout;
