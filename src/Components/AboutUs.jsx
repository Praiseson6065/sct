import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutUs = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".aboutus",{
      x:0,
      y:100,
      opacity:0
    },{
      x:0,
      y:0,
      rotate:0,
      opacity:1,
      duration:5,
      ease:"slow",
      scrollTrigger:{
        trigger:".aboutus",
        start:"top 70%",
        end:"bottom 80%",
        scrub:true,
        markers:true
      }
    })

  },[])  
  return (
    <div className="aboutus bg-[#F6FBFF]   flex flex-col px-24 items-center justify-around pb-8 pt-12 ">
      <div className="flex  justify-center items-center ">
        <div className="text-5xl font-bold text-center text-[#03416C] mb-8 ">
          About Us
        </div>
      </div>
      <div className="text-center text-lg text-slate-500 w-[70%]">
        Our car rental services offer a wide range of vehicles, including
        Indica, Indigo, Vista, Logan, Ford Fiesta, Innova, Xylo, Scorpio,
        Tavera, Winger, Ambassador, and more. We provide both AC and non-AC
        options at reasonable rates throughout Andhra Pradesh. Whether you need
        a car for daily, weekly, or monthly use, or if you&apos;re planning a
        tour, we have packages to suit your needs. Our vehicles come equipped
        with a Vehicle Tracking System for added security, and our experienced
        staff ensures your safety around the clock.
      </div>
    </div>
  );
};

export default AboutUs;
