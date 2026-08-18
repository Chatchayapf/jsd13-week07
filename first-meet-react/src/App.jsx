import React from "react";
// import Section from "./components/Section";

import Section from "./components/Section.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-yellow-950">
      <div className=" gap-y-12 flex flex-col justify-start w-[75%] lg:w-[50%]" >
        <h1 className="w-full p-6 bg-yellow-600 font-extrabold ">
          Responsive---responsive
        </h1>

        <Section />
      </div>
    </div>
  );
}