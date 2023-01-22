import { useContext } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";
import { ModeContext } from "./Components/Context/ModeContext";
import Footer from "./Components/Footer";
function App() {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className="App"
      style={mode ? { backgroundColor: "rgb(59, 59, 71)", color: "white" } : {}}
    >
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
