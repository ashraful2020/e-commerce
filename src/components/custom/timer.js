import React, { memo } from "react";
import Countdown from "react-countdown";

//  1 min = 60000 milliseconds
//  1 hour = 3600000 milliseconds
// 24 hour or 1 day = 8640000  milliseconds
// 30 day = 2592000000  milliseconds

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>You are good to go!</span>;
  } else {
    return (
      <span className="">
        {days > 0 && (
          <button className="m-1 bg-orange-400 px-3 py-2 text-white">
            {days ? `${days} days` : null}
          </button>
        )}
        <button className="m-1 bg-orange-400 px-3 py-2 text-white">
          {hours}h
        </button>
        <button className="m-1 bg-orange-400 px-3 py-2 text-white">
           {minutes} min 
        </button>
     
        <button className="m-1 bg-orange-400 px-3 py-2 text-white hidden md:inline">
           {seconds} sec 
        </button>
  
      </span>
    );
  }
};
const Timer = ({duration}) => {
  return (
    <div>
      <Countdown
        date={1662325719520 + duration }
 
        renderer={renderer}
        precision={3}
      />
    </div>
  );
};

export default memo(Timer);
