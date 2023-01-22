import { useState } from "react";
import styles from "../Components/Styles/Signin.module.css";

const formState = {
  name: "",
  email: "",
  password: "",
};
export default function SigninPage() {
  const [data, setData] = useState(formState);
  const inputHandler = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      console.log(data);
    } else {
      alert("Fill All Credentials");
    }
  };
  return (
    <div className={styles.SigninPage}>
      <h2>Enter Your Credentials</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => inputHandler(e)}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={(e) => inputHandler(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => inputHandler(e)}
        />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}
