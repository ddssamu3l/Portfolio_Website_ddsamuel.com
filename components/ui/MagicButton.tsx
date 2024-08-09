import React, { useState } from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ?
        <>
          <button
          className={`relative inline-flex items-center justify-center h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[3px] focus:outline-none ${otherClasses} shadow-[0_8px_16px_rgb(0_0_0/1)]`}
          onClick={handleClick}
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#f7c602_0%,#5d6bfc_50%,#f7c602_100%)] rounded-lg" />
            <div className="relative z-10 flex items-center justify-center w-full h-full px-8 py-2 bg-transparent rounded-lg group transition duration-200 text-white">
              <span className="inline-flex items-center gap-2">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
              </span>
            </div>   
          </button>
        </>
      :
        <>
          <button
          className={`relative inline-flex items-center justify-center h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[3px] focus:outline-none ${otherClasses}`}
          onClick={handleClick}
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#f7c602_0%,#5d6bfc_50%,#f7c602_100%)] rounded-lg" />
            <div className="relative z-10 flex items-center justify-center w-full h-full px-8 py-2 bg-black-100 rounded-lg group transition duration-200 text-white">
              <span className="inline-flex items-center gap-2">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
              </span>
            </div>   
          </button>
        </>
      }
      
    </div>
  );
};

export default MagicButton;
