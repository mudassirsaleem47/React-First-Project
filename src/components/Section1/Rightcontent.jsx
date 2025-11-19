import React from "react";
import RightCard from "./RightCard";

const Rightcontent = (props) => {

  return (
    <div id="card-wrapper" className="h-full  flex flex-nowrap overflow-x-auto rounded-4xl w-[70%] gap-10">
      {
        props.Users.map(function (elem, idx) {

          return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
        })
      }
    </div>
  );
};

export default Rightcontent;