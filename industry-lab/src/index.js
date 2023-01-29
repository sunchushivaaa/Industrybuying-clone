import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Context/AuthContext";
import ModeContextProvider from "./Components/Context/ModeContext";
import LoadingContextProvider from "./Components/Context/LoadingContext";
import CartContextProvider from "./Components/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeContextProvider>
    <CartContextProvider>
      <LoadingContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </LoadingContextProvider>
    </CartContextProvider>
  </ModeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
