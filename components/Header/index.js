import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../../public/ShakepayLogo.svg";
import ImgBtc from "../../public/btc.svg";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className="container py-3">
        <div className="row justify-content-md-around">
          <div className="col col-md-2 d-flex justify-content-evenly align-items-center">
            <Link href="/">
              <a className="d-flex justify-content-evenly align-items-center">
                <div className={styles.Logo}>
                  <Image src={ImgLogo} alt="logo" className="img-fluid" />
                </div>
                <div className="ms-2 fs-5 fw-bold font__avenirnextbold">
                  Derekpay
                </div>
              </a>
            </Link>
          </div>
          <div className="d-none d-lg-block col-3 row">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className={styles.currencyBtc}>
                <Image src={ImgBtc} alt="" className="img-fluid" />
              </div>
              <div className="fw-bold ms-2">$78,976.08</div>
            </div>
            {/* <div className="col-6 d-flex justify-content-center align-items-center">
              <div className={styles.currencyBtc}>
                <Image src={ImgBtc} alt="" className="img-fluid" />
              </div>
              <div className="fw-bold ms-2">$78,976.08</div>
            </div> */}
          </div>

          <div className="d-none col-7 d-md-flex justify-content-evenly align-items-center">
            <Link href="/">
              <a className="fw-bold">Card</a>
            </Link>
            <Link href="/">
              <a className="fw-bold">Careers</a>
            </Link>
            <Link href="/">
              <a className="fw-bold">Security</a>
            </Link>
            <Link href="/">
              <a className="fw-bold">Fees</a>
            </Link>
            <Link href="/">
              <a className="fw-bold">Help</a>
            </Link>
            <Link href="/signin">
              <a className="fw-bold">Sign in</a>
            </Link>
            <Link href="/signup">
              <a className="fw-bold btn btn-primary">Get Started</a>
            </Link>
          </div>

          {/* mobile hamberger */}
          <div className="col d-flex d-md-none justify-content-end">
            <button className="btn">
              <i className="bi bi-list fs-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
