import React from "react";
import { Nav2 } from "./Nav2";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import { SectionDemos2 } from "./SectionDemos2";

const LandingPage2 = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 flex flex-col overflow-hidden justify-center items-center z-0">
        <span className="bg-[#ef233c] w-52 h-52 ml-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="bg-[#04868b] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 "></span>
      </div>
      <div className="fixed inset-0 flex flex-col overflow-hidden z-0">
        <span className="bg-gradient-to-t from-[#FF008A] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-96"></span>
        <span className="bg-gradient-to-b from-[#7e7d7c] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-96 "></span>
      </div>

      <div className="relative z-10">
        <Nav2 />
        <div className="container mx-auto">
          <Section7 />
          <SectionDemos2 />
          {/* <SectionLayouts /> */}
          <Section8 />
          {/* <Section9 /> */}
          <Section10 />
          <Section11 />
          <Section12 />
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
