import { useContext, useEffect, useState } from "react";
import styles from "../Styles/Landing.module.css";
import { ModeContext } from "../Context/ModeContext";

export default function ProductsList() {
  const { mode } = useContext(ModeContext);
  return (
    <div className="ProductsList">
      <h1>Yess</h1>
    </div>
  );
}
