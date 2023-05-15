import React from "react";

const SnackBar = ({ message, time }: any) => {
  if (time === 4) {
    return (
      <div className="fixed top-[120px] right-[85px] bg-red-500/95 text-white py-2 px-4 rounded drop-shadow-2xl">
        {message}
      </div>
    );
  } else {
    return (
      <div className="fixed top-[120px] right-[85px] bg-green-500/95 text-white py-2 px-4 rounded drop-shadow-2xl">
        {message}
      </div>
    );
  }
};

export default SnackBar;
