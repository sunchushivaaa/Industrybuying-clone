import Banner from "../Components/LandingComponents/Banner";
import BestSellers from "../Components/LandingComponents/BestSellers";
import Cleaning from "../Components/LandingComponents/Cleaning";
import Instruments from "../Components/LandingComponents/Instruments";
import NewArrivals from "../Components/LandingComponents/NewArrivals";
import PowerTools from "../Components/LandingComponents/PowerTools";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Banner />
      <BestSellers />
      <NewArrivals />
      <Cleaning />
      <Instruments />
      <PowerTools />
    </div>
  );
}
