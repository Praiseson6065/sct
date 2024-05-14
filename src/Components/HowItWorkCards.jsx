import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";


const HowitWorks = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".howitworkcontainer",
      { x: 0, y: 100, opacity: 0 },
      { x: 0, y: 0, rotate: 0, opacity: 1, duration: 5, ease: "slow", 
        scrollTrigger: { trigger: ".howitworkcontainer", start: "top 70%", end: "bottom 80%", scrub: true, markers: true} 
      }
    );
    }, []);

  return (
    <div className="howitworkcontainer flex flex-col px-24 justify-center items-center py-8 bg-[#F6FBFF]">
      <div className="text-5xl font-bold text-center mb-4 text-[#03416C]">
        How it Work
      </div>
      <div className="text-center w-3/6 mb-12 text-sm text-slate-500 text-wrap">
        But the weekend but now even the airline. Clinical investment is not
        worth any pain. In front of him, the first thing in the throat of the
        doctor is to put grief and anger
      </div>
      <div className="grid grid-cols-3 w-5/6  j ustify-center items-center">
        <div className=" flex flex-col justify-center items-center ">
          <div className="rounded-xl border-[0.1rem]  border-[#72bdf75d] p-4 mb-4  bg-[#bee2fe2d]">
            <svg
              width="32px"
              height="32px"
              strokeWidth="5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#03416C"
            >
              <path
                d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                stroke="#03416C"
                strokeWidth="2"
              ></path>
              <path
                d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                fill="#03416C"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-bold text-base mb-2 text-[#03416c]">
            Choose Location
          </div>
          <div className="text-sm text-center text-slate-600">
            Select your starting point and set the stage for unforgettable
            adventures.
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <div className="rounded-xl border-[0.1rem]  border-[#72bdf75d] p-4 mb-4  bg-[#bee2fe2d]">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#03416C"
            >
              <path
                d="M13 21H5C3.89543 21 3 20.1046 3 19V10H21V13M15 4V2M15 4V6M15 4H10.5"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 2V6"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.9922 18H17.9922M21 18H17.9922M17.9922 18V15M17.9922 18V21"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-bold text-base mb-2 text-[#03416c]">
            Pick-Up-Date
          </div>
          <div className="text-sm text-center text-slate-600 ">
            Mark your calendar and unlock the gateway to seamless travel
            experiences.
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <div className="rounded-xl border-[0.1rem]  border-[#72bdf75d] p-4 mb-4  bg-[#bee2fe2d]">
            <svg
              width="32px"
              height="32px"
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M8 10L16 10"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 14L8 14"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16 14L17 14"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 18V11.4105C3 11.1397 3.05502 10.8716 3.16171 10.6227L5.4805 5.21216C5.79566 4.47679 6.51874 4 7.31879 4H16.6812C17.4813 4 18.2043 4.47679 18.5195 5.21216L20.8383 10.6227C20.945 10.8716 21 11.1397 21 11.4105V18M3 18V20.4C3 20.7314 3.26863 21 3.6 21H6.4C6.73137 21 7 20.7314 7 20.4V18M3 18H7M21 18V20.4C21 20.7314 20.7314 21 20.4 21H17.6C17.2686 21 17 20.7314 17 20.4V18M21 18H17M7 18H17"
                stroke="#03416C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-bold text-base mb-2 text-[#03416c]">
            Book Your Car
          </div>
          <div className="text-sm text-center text-slate-600 00">
            Find your perfect ride and embark on your road trip with confidence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
