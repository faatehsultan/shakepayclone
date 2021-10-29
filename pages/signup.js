import React, { useState, useContext } from "react";
import styles from "../styles/Signup.module.scss";
import { Metadata } from "../components";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../public/ShakepayLogo.svg";
import { authContext } from "../contexts/AuthContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("P");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(authContext);

  return (
    <>
      <Metadata title="Signup | Derekpay" />
      <div
        className={
          styles.signup +
          " container d-flex flex-column justify-content-center align-items-center "
        }
      >
        <div className={styles.formContainer + " border rounded p-4 w-100"}>
          {/* form top logo */}
          <Link href="/">
            <a
              className="position-absolute top-0 start-0 w-100 d-flex justify-content-center align-items-center"
              style={{ marginTop: "-50px" }}
            >
              <div className={styles.formTopLogo}>
                <Image src={ImgLogo} alt="logo" className="img-fluid" />
              </div>
            </a>
          </Link>

          <div className="fs-5 text-center" style={{ marginTop: "50px" }}>
            Let&apos;s get started 🚀
          </div>
          <br />
          <form className="form-signin">
            <div className="form-label-group py-2">
              <label htmlFor="inputUsername" className="fw-bold">
                Choose a @username
              </label>
              <input
                type="text"
                id="inputUsername"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>
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
            <div className="fw-bold">Account Type</div>
            <div className="d-flex justify-content-evenly">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Personal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Business
                </label>
              </div>
            </div>
            <br />
            <input
              type="submit"
              value="Sign up"
              className="btn btn-primary w-100 py-2"
            />
          </form>
        </div>
        <div className="text-center pt-3">
          Already have an account?{" "}
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </div>
      </div>
    </>
  );
}
