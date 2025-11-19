import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

const Section1 = (props) => {
  
  return (
    <div className="h-screen w-Full">
      <Navbar />
      <Page1content Users={props.Users} />
    </div>
  );
};

export default Section1;
