import { Nav } from "components/Nav2";
import Section7 from "components/Section7";
import Section8 from "components/Section8";
import Section9 from "components/Section9";
import Section10 from "components/Section10";
import Section11 from "components/Section11";
import Section12 from "components/Section12";
import { SectionDemos } from "components/SectionDemos2";
import { SectionLayouts } from "components/SectionLayouts2";
import React from "react";

function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 flex flex-col overflow-hidden justify-center items-center z-0">
        <span className="bg-[#ef233c] w-52 h-52 ml-40 rounded-full mix-blend-multiply filter blur-3xl opacity-5 lg:w-96 lg:h-96"></span>
        <span className="bg-[#04868b] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-5 lg:w-96 lg:h-96 "></span>
      </div>
      <div className="fixed inset-0 flex flex-col overflow-hidden z-0">
        <span className="bg-gradient-to-t from-[#FF008A] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="bg-gradient-to-b from-[#7e7d7c] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 "></span>
      </div>

      <div className="relative z-10">
        <Nav />
        <div className="container pb-20 pt-16">
          <Section7 />
        </div>

        <div id="demos" className="py-20 bg-slate-900/90 container rounded-3xl">
          <SectionDemos />
        </div>
        <div id="layouts" className="py-20 container !px-4 rounded-3xl">
          <SectionLayouts />
        </div>

        <div className=" bg-slate-900  rounded-3xl dark text-slate-200">
          <div className="container ">
            <Section8 />
            <Section9 />
            <Section10 />
          </div>
        </div>

        <div className="container">
          <Section11 />
          <Section12 />
        </div>
      </div>
    </div>
  );
}

export default App;
