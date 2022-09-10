import React from "react";
import img from "../../../assets/ssl.png"
import img1 from "../../../assets/logo.png"
 ;
const Footer = () => {
  return <div className="md:flex mx-auto m-0 p-4 bg-black
   text-white text-justify lg:px-12 static -z-10 bottom-0 right-0 left-0">

              <div className="w-3/12 text-left mx-auto"> 
                      <img className="md:w-1/2 mx-auto" src={img1} alt="" />
                      <img className="opacity-60" src={img} alt=""/>
              </div>
        <div className="md:w-9/12 lg:pt-20 sm:flex justify-evenly md:pl-0 pl-8">
          <div>
            <h1 className="text-3xl font-semibold">Locate us </h1>
              <div className="text-gray-300 font-sans py-5">  
                <p className="py-2 text-sm">28 Bartholomeo street, NY, NY</p>
                <a href="tel:0170000000" className="py-2 text-sm hover:underline block">Phone : 0170000000</a>
                <a href="tel:0170000000" className="py-2 text-sm hover:underline block">Phone : 0170000000</a>
                <a href="mailto:amarstore@gmail.com" className="py-2 text-sm hover:underline block">e-mail : amarstore@gmail.com</a>
              </div>  
          </div>  
        
     
        <NewInfo 
        title={"Accounts"} 
        details={["My profile ","Check out ","order ","help and support ",] } 
        links={["/","/","/","/"]} 
        />
        <NewInfo 
        title={"Category"} 
        details={["CategoryNa","CategoryNa","CategoryNa","CategoryNa",]} 
        links={["/","/","/","/"]} 
        />
             
        </div>
  </div>;
};

export default Footer;
 
function NewInfo({ title, details,links }) { 
  return (
    <div>
    <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="text-gray-300 font-sans py-5">  
        {
            details.map(((info,_i)=> <p key={_i} className="py-2 text-sm hover:underline">{info} </p>))
        }
      </div>  
  </div>  
  )
}
