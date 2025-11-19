import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = (props) => {
    
  return (
    <div className="bg-center shrink-0 overflow-hidden h-full w-[31%] p-10 relative rounded-4xl bg-no-repeat bg-cover" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="flex flex-col h-full justify-between text-white">
        <div className="h-10 w-10 text-base rounded-full bg-white text-black flex items-center justify-center">
          {props.id + 1}
        </div>
        <div>
          <h3 className="text-2xl text-shadow-lg/30">
            {props.intro}
          </h3>
          <div className="mt-10 flex w-full">
            <h4 className="bg-sky-500 text-black py-3 px-6 text-lg rounded-full">
              {props.tag}
            </h4>
            <span className="w-13 h-13 ml-5 rounded-full bg-white text-black flex items-center justify-center">
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;