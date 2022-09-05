import React, { memo } from "react";
import Countdown from "react-countdown";

//  1 min = 60000 milliseconds
//  1 hour = 3600000 milliseconds
// 24 hour or 1 day = 8640000  milliseconds
// 30 day = 2592000000  milliseconds

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  console.log(hours, minutes, seconds);
  if (completed) {
    return <span>You are good to go!</span>;
  } else {
    return (
      <span className="text-4xl">
        {days > 0 && (
          <button className="m-3 bg-orange-400 px-3 py-2 text-white">
            {" "}
            {days ? `${days} days` : null}
          </button>
        )}
        <button className="m-3 bg-orange-400 px-3 py-2 text-white">
          {" "}
          {hours}
        </button>
        <button className="m-3 bg-orange-400 px-3 py-2 text-white">
          {" "}
          {minutes}
        </button>
        <button className="m-3 bg-orange-400 px-3 py-2 text-white">
          {" "}
          {seconds}
        </button>
      </span>
    );
  }
};
const Timer = () => {
  return (
    <div>
      <Countdown
        date={1662325719520 + 86400000}
        renderer={renderer}
        precision={3}
      />
    </div>
  );
};

export default memo(Timer);
