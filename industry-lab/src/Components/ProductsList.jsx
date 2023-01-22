import { useContext, useEffect, useState } from "react";
import styles from "./Styles/Listing.module.css";
import { ModeContext } from "./Context/ModeContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loading from "./LoadingComponent/Loading";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const { mode } = useContext(ModeContext);
  const { type } = useParams();
  const [data, setData] = useState([{}]);
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    getData(type);
  }, []);

  const getData = async (param) => {
    setLoading(true);
    const request = await fetch(
      `https://industry-lab-backend.onrender.com/${param}`
    );
    const response = await request.json();
    console.log(response);
    setData(response);
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.ProductsList}>
        {data?.map((el) => {
          return (
            <Link
              key={el.id}
              to={`/${el.type}/${el.id}`}
              style={mode ? { backgroundColor: "white" } : {}}
            >
              <div>
                <img src={el.image} alt={el.name} />
                <p>{el.name}</p>
                <h5>By {el.brand}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
