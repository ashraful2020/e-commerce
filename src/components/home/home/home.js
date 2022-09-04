import React, { memo } from 'react';
import Carousel from '../../custom/carousel/carousel';
import Navigation from '../../shared/navigation/navigation';
import FlashSale from '../flashSale/flashSale';
import SmallDetails from '../smallDetails/smallDetails';
import Trending from '../trendingProduct/trending';

const Home = memo(() => {
    return (
      <div className="lg:max-w-7xl mx-auto" >
        <Navigation />
        <Carousel />
        <FlashSale />
        <SmallDetails />
        <Trending />
      </div>
    );
});

export default Home;