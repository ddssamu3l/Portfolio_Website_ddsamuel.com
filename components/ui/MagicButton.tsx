import React from "react";

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
  return (
    <button
      className={`relative inline-flex items-center justify-center h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[3px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#f7c602_0%,#5d6bfc_50%,#f7c602_100%)] rounded-lg" />
      <div className="relative z-10 flex items-center justify-center w-full h-full px-8 py-2 bg-black rounded-lg group transition duration-200 text-white hover:bg-transparent">
        <span className="inline-flex items-center gap-2">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </div>
    </button>
  );
};

export default MagicButton;
