import React from 'react';

const SmallDetails = () => {
    return (
      <div> 
          <hr className="bg-blue-400 pt-[1px] " />
         
        <div className=" md:flex items-center justify-around m-5 mx-auto">
          <div className="flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
            </svg>
            <div className="ml-5 text-left">
              <h1 className="text-xl font-semibold capitalize">
                {" "}
                free shipping{" "}
              </h1>
              <p className="font-extralight text-gray-500">
                {" "}
                Free Shipping for orders over £130.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01-2.094 5.977-4.496 11.044-7.068 14.968-17.29 26.383-62.522 40.075-101.654 28.596 5.984-19.75 10.132-39.834 12.07-59.12-95.46 8.177-212.544 8.42-301.207-22.642 41.727 95.317 99.325 164.465 164.983 230.08 18.296-2.164 35.807-11.35 51.837-25.37 85.218 34.667 188.066-2.555 226.748-60.68 46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"></path>
            </svg>
            <div className="ml-5 text-left">
              <h1 className="text-xl font-semibold capitalize">
                {" "}
                money guaranty{" "}
              </h1>
              <p className="font-extralight text-gray-500">
                {" "}
                Within 30 days for an exchange.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12v0.714V16v0.143C2,17.167,2.897,18,4,18h1c0.553,0,1-0.448,1-1v-5.143c0-0.552-0.447-1-1-1 H4.092C4.648,6.987,7.978,4,12,4s7.352,2.987,7.908,6.857H19c-0.553,0-1,0.448-1,1V16v1v1c0,1.103-0.897,2-2,2h-2v-1h-4v3h2h2h2 c2.206,0,4-1.794,4-4c1.103,0,2-0.833,2-1.857V16v-3.286V12C22,6.486,17.514,2,12,2z"></path>
            </svg>
            <div className="ml-5 text-left">
              <h1 className="text-xl font-semibold capitalize">
                {" "}
                Online support{" "}
              </h1>
              <p className="font-extralight text-gray-500">
                {" "}
                Within 30 days for an exchange.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              ></path>
              <path d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z"></path>
            </svg>
            <div className="ml-5 text-left">
              <h1 className="text-xl font-semibold capitalize">
                {" "}
                Flexible Payment{" "}
              </h1>
              <p className="font-extralight text-gray-500">
                {" "}
                Pay with Multiple Credit Cards{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SmallDetails;

