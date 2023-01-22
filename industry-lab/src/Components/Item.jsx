import { useContext, useEffect, useState } from "react";
import styles from "./Styles/Listing.module.css";
import { ModeContext } from "./Context/ModeContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loading from "./LoadingComponent/Loading";
import { Link } from "react-router-dom";

export default function Item() {
  const { mode } = useContext(ModeContext);
  const { type, id } = useParams();
  const [data, setData] = useState([{}]);
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    getData(type, id);
  }, []);

  const getData = async (param, id) => {
    setLoading(true);
    const request = await fetch(
      `https://industry-lab-backend.onrender.com/${param}/${id}`
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
      <div className={styles.Item}>
        <h1>{data.name}</h1>
      </div>
    );
  }
}
