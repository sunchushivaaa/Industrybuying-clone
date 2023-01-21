import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SigninPage from "../Pages/SigninPage";
import CartPage from "../Pages/CartPage";
import ProductsList from "../Components/LandingComponents/ProductsList";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:type" element={<ProductsList />} />
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
