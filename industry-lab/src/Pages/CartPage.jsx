import { CartContext } from "../Components/Context/CartContext";
import { ModeContext } from "../Components/Context/ModeContext";
import { useContext } from "react";
import styles from "../Components/Styles/Cart.module.css";

export default function CartPage() {
  const { cart, updateCart, total, deleteCart } = useContext(CartContext);
  const { mode } = useContext(ModeContext);
  return (
    <>
      <h1 className={styles.Header}>Total: - ₹ {total}</h1>
      <div className={styles.CartPage}>
        {cart.map((el) => {
          return (
            <div key={`${el.id}+${el.type}`}>
              <img src={el.image} alt={el.name} />
              <p>{el.name}</p>
              <b>by {el.brand}</b>
              <h3>{`₹${el.price}`}</h3>
              <div className={styles.Quantity}>
                <button
                  onClick={() => {
                    updateCart(
                      { ...el, quantity: el.quantity - 1 },
                      el.id,
                      -el.price
                    );
                  }}
                  disabled={el.quantity === 1}
                >
                  -
                </button>
                <button style={mode ? { color: "white" } : {}}>
                  {el.quantity}
                </button>
                <button
                  onClick={() => {
                    updateCart(
                      { ...el, quantity: el.quantity + 1 },
                      el.id,
                      el.price
                    );
                  }}
                  disabled={el.quantity === 10}
                >
                  +
                </button>
              </div>
              <button onClick={() => deleteCart(el.id, el.quantity * el.price)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
