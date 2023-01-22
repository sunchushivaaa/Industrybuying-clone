import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SigninPage from "../Pages/SigninPage";
import CartPage from "../Pages/CartPage";
import ListingPage from "../Pages/ListingPage";
import ItemsPage from "../Pages/ItemsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:type" element={<ListingPage />} />
      <Route path="/:type/:id" element={<ItemsPage />} />
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
