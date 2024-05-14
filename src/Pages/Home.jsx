import Navbar from "../Components/Navbar";

import AboutUs from "../Components/AboutUs";
import HowitWorks from "../Components/HowItWorkCards";
import BestService from "../Components/BestServices";
import Clients from "../Components/Clients";
import HomeStarter from "../Components/HomeStarter";

const Home = () => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <HomeStarter />

      <AboutUs />
      <HowitWorks />
      <BestService />
      <Clients />
    </div>
  );
};

export default Home;
