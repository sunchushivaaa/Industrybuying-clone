import styles from "../Styles/Landing.module.css";
import one from "../Images/banner-1.jpg";
import two from "../Images/banner-2.png";
import three from "../Images/banner-3.png";
import four from "../Images/banner-4.jpg";
import { useEffect, useState, useContext } from "react";
import Loading from "../LoadingComponent/Loading";
import { LoadingContext } from "../Context/LoadingContext";
import { ModeContext } from "../Context/ModeContext";
import banner1 from "../Images/PowerHouse-Strip-Banner.png";
import banner2 from "../Images/web-side-bnr-top.png";

const Images = [one, two, three, four];
export default function Banner() {
  const [index, setIndex] = useState(-1);
  const { loading, setLoading } = useContext(LoadingContext);
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    const id = setInterval(() => {
      if (index === 3) {
        setIndex(-1);
      }
      setIndex((prev) => prev + 1);
    }, 1500);

    return () => {
      clearInterval(id);
    };
  }, [index]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.Banner}>
        <div className={styles.Carousel}>
          <img src={Images[index]} alt={Images[index]} />
          <br />
          <div className={styles.Buttons}>
            <button
              style={index === 0 ? { backgroundColor: "rgb(255, 115, 0)" } : {}}
              onClick={() => setIndex(0)}
            ></button>
            <button
              style={index === 1 ? { backgroundColor: "rgb(255, 115, 0)" } : {}}
              onClick={() => setIndex(1)}
            ></button>
            <button
              style={index === 2 ? { backgroundColor: "rgb(255, 115, 0)" } : {}}
              onClick={() => setIndex(2)}
            ></button>
            <button
              style={index === 3 ? { backgroundColor: "rgb(255, 115, 0)" } : {}}
              onClick={() => setIndex(3)}
            ></button>
          </div>
        </div>
        <div
          style={mode ? { backgroundColor: "white", color: "black" } : {}}
          className={styles.Number}
        >
          <p>
            Enter your Phone number to <b>GET UPTO 5% OFF</b>
          </p>
          <form>
            <input type="number" placeholder="Enter your phone" />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className={styles.Gif}>
          <img
            src="https://static3.industrybuying.com/homepage/1551767207right-small-reseller2.gif"
            alt="gif"
          />
        </div>
        <div className={styles.Flex}>
          <img src={banner1} alt="flex" />
        </div>
      </div>
    );
  }
}
