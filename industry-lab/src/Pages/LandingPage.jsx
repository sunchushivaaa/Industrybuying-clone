import { useContext } from "react";
import BestSellers from "../Components/LandingComponents/BestSellers";
import Cleaning from "../Components/LandingComponents/Cleaning";
import Instruments from "../Components/LandingComponents/Instruments";
import NewArrivals from "../Components/LandingComponents/NewArrivals";
import PowerTools from "../Components/LandingComponents/PowerTools";
import { LoadingContext } from "../Components/Context/LoadingContext";
import Loading from "../Components/LoadingComponent/Loading";

export default function LandingPage() {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="LandingPage">
        <BestSellers />
        <NewArrivals />
        <Cleaning />
        <Instruments />
        <PowerTools />
      </div>
    );
  }
}
