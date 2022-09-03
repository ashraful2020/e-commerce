import React from 'react';
import Product from '../product/product';
import "./home.css"
const HomeInterface = () => {
    return (
      <div>
        <>
          <div className="home" style={{ marginTop: -200 }}>
            <div className="home-container">
              <div className="home-row">
                <Product
                  id={1}
                  title="The lean startup"
                  price={19}
                  img="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg"
                  rating={4}
                  quantity={0}
                />
                <Product
                  id={2}
                  title="Apple pencil 2022"
                  price={210}
                  img="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
                  rating={5}
                  quantity={0}
                />
              </div>
              <div className="home-row">
                <Product
                  id={3}
                  title="Logitech nhr52 200 wireless mechanical keyboard and mouse combo"
                  price={340}
                  img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg"
                  rating={5}
                  quantity={0}
                />
                <Product
                  id={4}
                  title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                  price={19}
                  img="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
                  rating={4}
                  quantity={0}
                />
                <Product
                  id={5}
                  title="Logitech nhr52 200 wireless mechanical keyboard and mouse combo"
                  price={340}
                  img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg"
                  rating={5}
                  quantity={0}
                />{" "}
                <Product
                  id={6}
                  title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                  price={19}
                  img="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
                  rating={4}
                  quantity={0}
                />
              </div>
              <div className="home-row">
                <Product
                  id={7}
                  title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for"
                  price={609}
                  img="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg"
                  rating={4}
                  quantity={0}
                />
                <Product
                  id={8}
                  title="Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830,"
                  price={99.98}
                  img="https://m.media-amazon.com/images/I/71dknWOvquL._AC_UL480_QL65_.jpg"
                  rating={4}
                  quantity={0}
                />
                <Product
                  id={5}
                  title="Logitech nhr52 200 wireless mechanical keyboard and mouse combo"
                  price={340}
                  img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg"
                  rating={5}
                  quantity={0}
                />
              </div>
            </div>
          </div>
        </>
      </div>
    );
};

export default HomeInterface;