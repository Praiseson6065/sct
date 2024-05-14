import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`flex justify-between items-center py-4  top-2 fixed z-50 w-11/12 left-0 mx-12 ${scrollY > 0 ? 'bg-[#bee2fe2d] shadow-md  px-12  rounded-2xl ' : 'bg-transparent px-12 '}`}>
      <div>
        <img src={logo} width="160px" alt="" />
      </div>
      <div className={`flex gap-8  font-bold ${scrollY > 0 ? 'text-[#03416C]' : 'text-white'}`}>
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <Link to="/">Services</Link>
        <Link to="/">Clients</Link>
      </div>
    </nav>
  );
};

export default Navbar;
