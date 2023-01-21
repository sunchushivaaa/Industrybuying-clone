import { useContext } from "react";
import { ModeContext } from "./Context/ModeContext";
import styles from "./Styles/General.module.css";
export default function Coupon() {
  const { mode } = useContext(ModeContext);
  return (
    <div className={styles.Coupon} style={mode ? { color: "black" } : {}}>
      <h3>
        Avail 30% off on your First Order! Coupon: - <span>First30</span>
      </h3>
    </div>
  );
}
