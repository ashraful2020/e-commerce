import React from 'react';
import img from '../../../assets/ssl.png';
import img1 from '../../../assets/logo.png';
const Footer = () => {
  return (
    <div className="static bottom-0 right-0 left-0 -z-10 m-0 mx-auto bg-black p-4 text-justify text-white md:flex lg:px-12">
      <div className="mx-auto w-3/12 text-left">
        <img className="mx-auto md:w-1/2" src={img1} alt="" />
        <img className="opacity-60" src={img} alt="" />
      </div>
      <div className="justify-evenly pl-8 sm:flex md:w-9/12 md:pl-0 lg:pt-20">
        <div>
          <h1 className="text-3xl font-semibold">Locate us </h1>
          <div className="py-5 font-sans text-gray-300">
            <p className="py-2 text-sm">28 Bartholomeo street, NY, NY</p>
            <a
              href="tel:0170000000"
              className="block py-2 text-sm hover:underline">
              Phone : 0170000000
            </a>
            <a
              href="tel:0170000000"
              className="block py-2 text-sm hover:underline">
              Phone : 0170000000
            </a>
            <a
              href="mailto:amarstore@gmail.com"
              className="block py-2 text-sm hover:underline">
              e-mail : amarstore@gmail.com
            </a>
          </div>
        </div>

        <NewInfo
          title={'Accounts'}
          details={['My profile ', 'Check out ', 'order ', 'help and support ']}
          links={['/', '/', '/', '/']}
        />
        <NewInfo
          title={'Category'}
          details={['CategoryNa', 'CategoryNa', 'CategoryNa', 'CategoryNa']}
          links={['/', '/', '/', '/']}
        />
      </div>
    </div>
  );
};

export default Footer;

function NewInfo({ title, details, links }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="py-5 font-sans text-gray-300">
        {details.map((info, _i) => {
          return (
            <p key={_i} className="py-2 text-sm hover:underline">
              {info}{' '}
            </p>
          )
        })}
      </div>
    </div>
  );
}
