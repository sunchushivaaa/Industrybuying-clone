import { useState } from "react";

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
    }
  };
  return (
    <div className="SigninPage">
      <h1>Enter Your Credentials</h1>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
