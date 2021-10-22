import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import ImgLogo from "../../public/ShakepayLogo.svg";

export default function Footer() {
  return (
    <div className={styles.Footer + " border border-top border-2 py-5"}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 py-2">
            <div className="d-flex justify-content-start align-items-center">
              <div className={styles.Logo}>
                <Image src={ImgLogo} alt="logo" className="img-fluid" />
              </div>
              <div className="ms-2 fs-5 fw-bold font__avenirnextbold">
                Derekpay Inc.
              </div>
            </div>
            <div className="text-gray fw-bold">India 🍁</div>
            <br />
            <br />
            <div className="text-gray font__avenirnextbold">Regulated</div>
            <div className="text-gray">FINTRAC #M17065696</div>
            <div className="text-gray">AMF #904007</div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div className="text-gray font__avenirnextbold">PRODUCT</div>
            <br />
            <div className="fw-bold">Fees</div>
            <div className="fw-bold">Charts</div>
            <div className="fw-bold">Blog</div>
            <div className="fw-bold">Feedback</div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div className="text-gray font__avenirnextbold">COMPANY</div>
            <br />
            <div className="fw-bold">About us</div>
            <div className="fw-bold">Help</div>
            <div className="fw-bold">Wall of champions</div>
            <div className="fw-bold">Careers</div>
            <div className="fw-bold">Terms of use</div>
            <div className="fw-bold">Privacy Policy</div>
            <div className="fw-bold">Production orders</div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div className="text-gray font__avenirnextbold">SOCIAL</div>
            <br />
            <div className="fw-bold">Discord</div>
            <div className="fw-bold">Twitter</div>
            <div className="fw-bold">Reddit</div>
            <div className="fw-bold">Facebook</div>
            <div className="fw-bold">YouTube</div>
            <div className="fw-bold">Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
}
