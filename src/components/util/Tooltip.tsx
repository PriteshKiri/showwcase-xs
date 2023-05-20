import React, { ReactNode, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (content === "Logout") {
    return (
      <div className="relative">
        <div
          className="inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {isHovered && (
          <div className="absolute break-normal right-[35px] top-1/2 -translate-y-1/2 px-[8px] py-[4px] text-black rounded-[4px]  drop-shadow-md bg-white/95 text-[12px] block">
            {content}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative">
        <div
          className="inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {isHovered && (
          <div className="absolute break-normal right-[45px] top-1/2 -translate-y-1/2 px-[8px] py-[4px] text-white rounded-[4px]  drop-shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 text-[12px]">
            {content}
          </div>
        )}
      </div>
    );
  }
};

export default Tooltip;
