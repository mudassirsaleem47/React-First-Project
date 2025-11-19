import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
  
  return (
    <div className="flex py-15 px-18 gap-10 items-center justify-between h-[90vh]">
      <Leftcontent />
      <Rightcontent Users={props.Users} />
    </div>
  );
};

export default Page1content;

