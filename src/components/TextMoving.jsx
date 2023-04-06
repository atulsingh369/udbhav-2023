import React from "react";

const TextMoving = () => {
  return (
    <div className="bg-transparent text-accent w-screen h-8 md:h-10 overflow-hidden flex items-center">
      <div
        id="target"
        className=" whitespace-nowrap  text-xl font-semibold tracking-wide"
      >
        **Before filling out the form, please take a look at the rules specified
        for this event. Any kind of bad code of conduct will lead to
        disqualification.**
      </div>
    </div>
  );
};

export default TextMoving;
