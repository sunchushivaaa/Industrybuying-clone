import { useContext, useEffect, useState } from "react";
import styles from "./Styles/Item.module.css";
import { ModeContext } from "./Context/ModeContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loading from "./LoadingComponent/Loading";
import { CartContext } from "./Context/CartContext";
// import { Link } from "react-router-dom";

export default function Item() {
  const { mode } = useContext(ModeContext);
  const { type, id } = useParams();
  const [data, setData] = useState([{}]);
  const { loading, setLoading } = useContext(LoadingContext);
  const [quantity, setQuantity] = useState(1);
  const [check, setCheck] = useState(true);
  const [pin, setPin] = useState("");
  const { pushCart } = useContext(CartContext);

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
  const inputHandler = (e) => {
    setPin(Number(e.target.value));
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
            <div className={styles.Availability}>
              <input
                type="number"
                placeholder="Enter pincode"
                onChange={(e) => inputHandler(e)}
                value={pin}
              />
              <button
                onClick={() => {
                  if (pin === 400017) {
                    setCheck(!check);
                    alert("Product is available for this pincode");
                    setPin("");
                  } else {
                    alert("Not available for this pincode");
                  }
                }}
              >
                Check
              </button>
              <br />
              <b>*try 400017</b>
            </div>
            <div className={styles.Buttons}>
              <button
                style={check ? { cursor: "not-allowed" } : {}}
                onClick={(e) => {
                  if (check) {
                    alert("Check for your pincode");
                  } else {
                    console.log(data);
                    pushCart({ ...data, quantity: quantity });
                  }
                }}
              >
                Add to Cart
              </button>
              <button
                style={check ? { cursor: "not-allowed" } : {}}
                onClick={(e) => {
                  if (check) {
                    alert("Check for your pincode");
                  } else {
                    console.log(data);
                  }
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
