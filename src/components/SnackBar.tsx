import React from "react";

const SnackBar = ({ message }: any) => {
  return (
    <div className="fixed top-[120px] right-[100px] bg-white text-gray-800 py-2 px-4 rounded">
      {message}
    </div>
  );
};

export default SnackBar;
