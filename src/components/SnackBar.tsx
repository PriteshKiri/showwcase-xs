import React from "react";

const SnackBar = ({ message }: any) => {
  return (
    <div className="fixed top-[120px] right-[100px] bg-white/90 text-gray-800 py-2 px-4 rounded drop-shadow-2xl">
      {message}
    </div>
  );
};

export default SnackBar;
