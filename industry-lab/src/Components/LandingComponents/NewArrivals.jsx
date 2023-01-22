import { useContext, useEffect, useState } from "react";
import styles from "../Styles/Landing.module.css";
import { ModeContext } from "../Context/ModeContext";
import { LoadingContext } from "../Context/LoadingContext";
import Loading from "../LoadingComponent/Loading";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const { mode } = useContext(ModeContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    const request = await fetch(
      "https://industry-lab-backend.onrender.com/new_arrivals"
    );
    const response = await request.json();
    setData(response);
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        className={styles.NewArrivals}
        style={mode ? { backgroundColor: "rgb(59, 59, 71)" } : {}}
      >
        <h2 style={mode ? { color: "white" } : {}}>
          New <span>Arrivals</span>
        </h2>
        <div className={styles.DataDiv}>
          {data?.map((el) => {
            return (
              <Link
                key={`${el.id}+${el.type}`}
                to={`/${el.type}/${el.id}`}
                style={mode ? { backgroundColor: "white" } : {}}
              >
                <div
                  style={
                    mode ? { backgroundColor: "white", color: "black" } : {}
                  }
                >
                  <img src={el.image} alt={el.name} />
                  <p>{el.name}</p>
                  <h5>by {el.brand}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
