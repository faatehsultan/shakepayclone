import React, { useState, useContext } from "react";
import styles from "../styles/Signin.module.scss";
import { Metadata } from "../components";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../public/ShakepayLogo.svg";
import { authContext } from "../contexts/AuthContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(authContext);

  const handleSignin = (e) => {
    setLoading(true);
    e.preventDefault();
    //api call here
    setLoading(false);

    setUser({
      type: "user",
      id: "1",
      username: "johndoe",
      email: email,
    });
  };

  return (
    <>
      <Metadata title="Signin | Derekpay" />
      <div
        className={
          styles.signin +
          " container d-flex flex-column justify-content-center align-items-center "
        }
      >
        <div className={styles.formContainer + " border rounded p-4 w-100"}>
          {/* form top logo */}
          <div
            className="position-absolute top-0 start-0 w-100 d-flex justify-content-center align-items-center"
            style={{ marginTop: "-50px" }}
          >
            <div className={styles.formTopLogo}>
              <Image src={ImgLogo} alt="logo" className="img-fluid" />
            </div>
          </div>

          <div
            className="fs-6 fw-bold text-center"
            style={{ marginTop: "50px" }}
          >
            Sign in
          </div>
          <br />
          <form className="form-signin" onSubmit={handleSignin}>
            <div className="form-label-group py-2">
              <label htmlFor="inputEmail" className="fw-bold">
                Email
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="form-label-group py-2">
              <label htmlFor="inputPassword" className="fw-bold">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            <br />
            <input
              type="submit"
              value="Sign in"
              className="btn btn-primary w-100 py-2"
            />
            <div
              className={
                (!user ? "invisible" : "") +
                " text-center text-danger mt-2 fw-bold"
              }
            >
              Invalid Credentials! Please try again.
            </div>
          </form>
        </div>
        <div className="text-center pt-3">
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </div>
      </div>
    </>
  );
}
