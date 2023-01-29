const { useState } = require("react");
const { createContext } = require("react");

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // const [cart, setCart] = useState([
  //   {
  //     id: 1,
  //     type: "thermometer",
  //     name: "Pro'sKit MT-4606 Infrared Thermometer",
  //     brand: "Pros Kit",
  //     features: [
  //       "Brand Name : Pros Kit",
  //       "Type of Product : Infrared Thermometer",
  //       "Model No : MT-4606",
  //       "Is Consumable : N",
  //     ],
  //     image:
  //       "https://static1.industrybuying.com/products/testing-and-measuring-instruments/temperature-humidity-measuring/infrared-thermometer/TES.INF.43994901_1668094233013.webp",
  //     quantity: 1,
  //     price: 3580,
  //   },
  //   {
  //     id: 2,
  //     type: "thermometer",
  //     name: "Real Instruments IR Infrared Gun Thermometer Laser Point GM550 Instant Read Thermocouple Laser IR-550",
  //     brand: "Real Instruments",
  //     features: [
  //       "Brand Name : Real Instruments",
  //       "Type of Product : Infrared Thermometer",
  //       "Model No : IR-550",
  //       "Weight : 0.17 Kg",
  //       "Dimensions : 170 x 81 x 38 mm",
  //       "Color : Black&Yellow",
  //     ],
  //     image:
  //       "https://static1.industrybuying.com/products/testing-and-measuring-instruments/temperature-humidity-measuring/infrared-thermometer/TES.INF.66280404_1668261470116.webp",
  //     quantity: 1,
  //     price: 1780,
  //   },
  //   {
  //     id: 3,
  //     type: "thermometer",
  //     name: "Klein Tools 1 x 9V Dual Laser Infrared Thermometer IR5",
  //     brand: "Klein Tools",
  //     features: [
  //       "Brand Name : Klein Tools",
  //       "Type of Product : Laser Infrared Thermometer",
  //       "Display : Digital Backlit",
  //       "Special Features : Several Calculation Modes to Facilitate Different Temperature Measurement Applications",
  //       "Part No : IR5",
  //       "Application : Accurate Targeting and Temperature Measurement",
  //     ],
  //     image:
  //       "https://static1.industrybuying.com/products/testing-and-measuring-instruments/temperature-humidity-measuring/infrared-thermometer/TES.INF.33407400_1668065592048.webp",
  //     quantity: 1,
  //     price: 13800,
  //   },
  //   {
  //     id: 4,
  //     type: "thermometer",
  //     name: "G-Tech MT-5 -50˚C to 750˚C INFRARED THERMOMETER",
  //     brand: "G-Tech",
  //     features: [
  //       "Brand Name : G-Tech",
  //       "Type of Product : Infrared Thermometer",
  //       "Response Time : 0.5 Seconds",
  //       "Model No : MT-5",
  //       "Temperature Range : -50˚C to 750˚C",
  //       "Color : Black",
  //     ],
  //     image:
  //       "https://static1.industrybuying.com/products/testing-and-measuring-instruments/temperature-humidity-measuring/infrared-thermometer/TES.INF.37842241_1674048559838.webp",
  //     quantity: 1,
  //     price: 3680,
  //   },
  //   {
  //     id: 5,
  //     type: "thermometer",
  //     name: "Metrix+ 62 Pro Human Body Infrared Thermometer 5–14 Um",
  //     brand: "Metrix+",
  //     features: [
  //       "Brand Name : Metrix+",
  //       "Type of Product : Infrared Thermometer",
  //       "Repeatability : 1% rdg or 1°C, whichever is greater",
  //       "Resolution : 0.1°C",
  //       "Emissivity : Adjustable 0.10 ~ 1.00",
  //       "Response Time : 0.5s, 95% response",
  //     ],
  //     image:
  //       "https://static1.industrybuying.com/products/testing-and-measuring-instruments/temperature-humidity-measuring/infrared-thermometer/TES.INF.26058481_1668230008878.webp",
  //     quantity: 5,
  //     price: 2580,
  //   },
  // ]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const pushCart = (param) => {
    setTotal(total + param.price * param.quantity);
    setCart([...cart, param]);
  };

  const updateCart = (param, id, totals) => {
    setTotal(total + totals);
    const mappedCart = cart.map((el) => {
      if (el.id === id) {
        return param;
      } else {
        return el;
      }
    });
    setCart(mappedCart);
  };
  const deleteCart = (id, totals) => {
    const filteredCart = cart.filter((el) => {
      return el.id !== id;
    });
    setCart(filteredCart);
    setTotal(total - totals);
  };
  return (
    <CartContext.Provider
      value={{ cart, pushCart, updateCart, total, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
