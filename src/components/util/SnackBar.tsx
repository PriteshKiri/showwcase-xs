const SnackBar = ({ message, type }: any) => {
  if (type === "success" || type === "login") {
    return (
      <div className="w-[400px] fixed top-[120px]  flex justify-center right-0">
        <p className="fixed bg-green-500/95 text-white py-[8px] px-[16px] rounded-[4px] drop-shadow-2xl  text-[12px]">
          {message}
        </p>
      </div>
    );
  } else if (type === "logout") {
    return (
      <div className="w-[400px] fixed top-[120px]  flex justify-center right-0">
        <p className="fixed bg-[#E0E0E0]/95 !text-black py-[8px] px-[16px] rounded-[4px] drop-shadow-2xl text-[12px]">
          {message}
        </p>
      </div>
    );
  } else if (type === "clipboard") {
    return (
      <div className="w-[400px] fixed top-[120px]  flex justify-center right-0">
        <p className="fixed bg-[#068fcc]/95 text-white py-[8px] px-[16px] rounded-[4px] drop-shadow-2xl text-[12px]">
          {message}
        </p>
      </div>
    );
  } else if (type === "error") {
    return (
      <div className="w-[400px] fixed top-[120px]  flex justify-center right-0">
        <p className="fixed bg-red-500/95 text-white py-[8px] px-[16px] rounded-[4px] drop-shadow-2xl text-[12px]">
          {message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="w-[400px] fixed top-[120px]  flex justify-center right-0">
        <div className="fixed bg-yellow-500/95text-white py-[8px] px-[16px] rounded-[4px] drop-shadow-2xl">
          {message}
        </div>
      </div>
    );
  }
};

export default SnackBar;
