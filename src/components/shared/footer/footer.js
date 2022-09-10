import React from "react";
import img from "../../../assets/ssl.png"
import img1 from "../../../assets/logo.png"
const Footer = () => {
  return <div className="flex m-0 p-4 bg-black text-white text-justify px-12 static -z-10 bottom-0 right-0 left-0 ">
    <div className="w-3/12 text-left"> 
            <img className="w-1/2 mx-auto" src={img1} alt="" />
                <img className="opacity-60" src={img} alt=""/>
    </div>
    <div className="w-9/12 pt-20 flex justify-around ">
      <div>
        <h1 className="text-3xl font-semibold">Locate us </h1>
      <div className="text-gray-300 font-sans py-5">  
        <p className="py-2 text-sm">28 Bartholomeo street, NY, NY</p>
              <a href="tel:0170000000" className="py-2 text-sm hover:underline block">Phone : 0170000000</a>
        <a href="tel:0170000000" className="py-2 text-sm hover:underline block">Phone : 0170000000</a>
                              <a href="mailto:amarstore@gmail.com" className="py-2 text-sm hover:underline block">e-mail : amarstore@gmail.com</a>
      
      </div>  
      </div>  
      <div>
        <h1 className="text-3xl font-semibold">Accounts</h1>
      <div className="text-gray-300 font-sans py-5">  
        <p className="py-2 text-sm">My profile </p>
        <p className="py-2 text-sm">Check out </p>
        <p className="py-2 text-sm">order </p>
        <p className="py-2 text-sm">help and support </p>
      
      </div>  
      </div>  
      <div>
        <h1 className="text-3xl font-semibold">Category</h1>
      <div className="text-gray-300 font-sans py-5">  
        <p className="py-2 text-sm">Category Name </p>
        <p className="py-2 text-sm">Category Name </p>
        <p className="py-2 text-sm">Category Name </p>
        <p className="py-2 text-sm">Category Name </p>
      
      </div>  
      </div>  
    </div>
  </div>;
};

export default Footer;
