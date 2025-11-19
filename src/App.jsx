import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {

  const Users = [

    {
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      tag: "Satisfied",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-young-woman-holding-laptop_23-2148499887.jpg",
      intro:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      tag: "Underserved",
    },
    {
      img: "https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148141913.jpg",
      intro:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      tag: "Underbanked",
    },
    {
      img: "https://img.freepik.com/free-photo/medium-shot-woman-working-with-laptop_23-2149915940.jpg",
      intro:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      tag: "Processing",
    },
  ];
  
  return (
    <>
      <Section1 Users={Users} />
      <Section2 />
    </>
  );
};

export default App;
