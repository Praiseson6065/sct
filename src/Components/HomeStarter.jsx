import MainCar from "../assets/Images/maincar2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const HomeStarter = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".maincar", {x:-100,duration:3,ease:"slow",scale:1.3})
    
    }, []);
  return (
    <>
      <div className="homestarter flex flex-col bg-[url('/src/assets/Images/bg.png')] h-screen bg-cover ">
        <div className="flex justify-center items-center  px-24 h-[calc(100vh-77px)] ">
          <div className=" text-9xl font-black text-wrap text-[#03416C]">
            SEKHAR CAR TRAVELS
          </div>
          <div>
            <img className="maincar mr-[-12rem] " src={MainCar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStarter;
