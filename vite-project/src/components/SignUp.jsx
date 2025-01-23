import "../assets/SignIn.css";
import { useState } from "react";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [Surname, setSurName] = useState("");
  const correctEmail = "admin@techSphere.com";
  const correctpassword = "password123";

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== correctEmail) {
      console.log("wrong email!!");
      return;
    }
    if (password !== correctpassword) {
      console.log("wrong password!!");
      return;
    }
    console.log("logged in");
    setEmail("");
    setPassword("");
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleSurName = (e) => {
    setSurName(e.target.value);
  };
  return (
    <>
      <section className="contain">
        <section className="container">
          <div className="heading">Sign Up</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              onChange={handleFirstName}
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="First Name"
              value={FirstName}
            />
            <input
              onChange={handleSurName}
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Surname"
              value={Surname}
            />
            <input
              onChange={handleEmail}
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
            />
            <input
              onChange={handlePassword}
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
            />

            <button className="login-button">Create</button>
          </form>

          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </section>
      </section>
    </>
  );
}
