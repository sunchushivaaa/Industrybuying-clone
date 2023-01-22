import { useContext, useEffect, useState } from "react";
import styles from "./Styles/Item.module.css";
import { ModeContext } from "./Context/ModeContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loading from "./LoadingComponent/Loading";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD, UPDATE, DELETE } from "../Reducer/actions";
import { store } from "../Reducer/store";

export default function Item() {
  const { mode } = useContext(ModeContext);
  const { type, id } = useParams();
  const [data, setData] = useState([{}]);
  const { loading, setLoading } = useContext(LoadingContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(type, id);
  }, []);

  const getData = async (param, id) => {
    setLoading(true);
    const request = await fetch(
      `https://industry-lab-backend.onrender.com/${param}/${id}`
    );
    const response = await request.json();
    setData(response);
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.Item}>
        <h1>{data.name}</h1>
        <div className={styles.Container}>
          <div className={styles.Product}>
            <img src={data.image} alt={data.name} />
          </div>
          <div className={styles.Add}>
            <p>Features: -</p>
            <ul>
              {data.features?.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
            <h2>{`₹${data.price}`}</h2>
            <div className={styles.Quantity}>
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <button disabled style={mode ? { color: "white" } : {}}>
                {quantity}
              </button>
              <button
                disabled={quantity === 10}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className={styles.Buttons}>
              <button
                onClick={() => {
                  dispatch(ADD({ ...data, quantity: quantity }));
                  console.log(store);
                }}
              >
                Add to Cart
              </button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
