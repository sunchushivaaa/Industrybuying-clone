import { useContext, useEffect, useState } from "react";
import styles from "../Styles/Landing.module.css";
import { ModeContext } from "../Context/ModeContext";
import { LoadingContext } from "../Context/LoadingContext";

export default function Instruments() {
  const { mode } = useContext(ModeContext);
  const { setLoading } = useContext(LoadingContext);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    const request = await fetch(
      "https://industry-lab-backend.onrender.com/instruments"
    );
    const response = await request.json();
    setData(response);
    setLoading(false);
  };
  return (
    <div
      className={styles.Instruments}
      style={mode ? { backgroundColor: "rgb(59, 59, 71)" } : {}}
    >
      <h2 style={mode ? { color: "white" } : {}}>
        Instrumentation <span>Products</span>
      </h2>
      <div
        className={styles.DataDiv}
        style={mode ? { backgroundColor: "transparent" } : {}}
      >
        {data?.map((el) => {
          return (
            <div
              key={el.id}
              style={mode ? { backgroundColor: "white", color: "black" } : {}}
            >
              <img src={el.image} alt={el.name} />
              <h4 style={{ textAlign: "center" }}>{el.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
