import styles from "../styles/Home.module.scss";
import { MainLayout } from "../layouts";
import { Metadata } from "../components";
import Link from "next/link";
import Image from "next/image";
import ImgGetongoogleplay from "../public/google-play-us.svg";
import ImgDownloadonappstore from "../public/apple-app-store-us.svg";
import ImgIphone from "../public/iphone.png";
import ImgBtcmagazine from "../public/bitcoin-magazine.svg";
import ImgTechvibes from "../public/techvibes.svg";
import ImgBloomberg from "../public/bloomberg.svg";
import ImgForbes from "../public/forbes.svg";
import ImgFinancialpost from "../public/financial-post.svg";

export default function Home() {
  return (
    <>
      <Metadata />
      <MainLayout>
        <div className={styles.Home}>
          {/* hero */}
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-12 col-md-7 py-5">
                <div className="display-5 font__avenirnextbold">
                  The <span className="text-blue">easiest way</span> for
                  Canadians to buy and sell bitcoin.
                </div>
                <br />
                <div className="text-gray fs-4 fw-bold">
                  Buy bitcoin in minutes with Interac e-Transfer®. Cash out to
                  your bank account instantly. Customer service that cares.
                </div>
                <br />
                <div className="d-flex justify-content-start">
                  <div className="p-2">
                    <Link href="/">
                      <a className="btn btn-primary p-2 font__avenirnextbold position-relative d-flex justify-content-center align-items-center">
                        <Image
                          src={ImgGetongoogleplay}
                          alt="google_play"
                          className="img-fluid invisible"
                        />
                        <span className="position-absolute top-25 left-0">
                          Get Started <i className="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link href="/">
                      <a className="btn border border-2 p-2 d-flex justify-content-center align-items-center">
                        <Image
                          src={ImgGetongoogleplay}
                          alt="google_play"
                          className="img-fluid"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link href="/">
                      <a className="btn border border-2 p-2 d-flex justify-content-center align-items-center">
                        <Image
                          src={ImgDownloadonappstore}
                          alt="appstore"
                          className="img-fluid"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-12 px-5 col-md-3">
                <Image src={ImgIphone} alt="iphone" className="img-fluid" />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
          <br />
          <br />

          {/* brands section */}
          <div className={styles.BrandsSection}>
            <div className="container py-5">
              <div className="row flex-column flex-md-row align-items-center justify-content-evenly">
                <div className="col">
                  <Link href="/">
                    <a className="p-3 d-flex align-items-center justify-content-center">
                      <Image src={ImgBtcmagazine} alt="btc_magazine" />
                    </a>
                  </Link>
                </div>
                <div className="col">
                  <Link href="/">
                    <a className="p-3 d-flex align-items-center justify-content-center">
                      <Image src={ImgTechvibes} alt="techvibes" />
                    </a>
                  </Link>
                </div>
                <div className="col">
                  <Link href="/">
                    <a className="p-3 d-flex align-items-center justify-content-center">
                      <Image src={ImgBloomberg} alt="bloomberg" />
                    </a>
                  </Link>
                </div>
                <div className="col">
                  <Link href="/">
                    <a className="p-3 d-flex align-items-center justify-content-center">
                      <Image src={ImgForbes} alt="forbes" />
                    </a>
                  </Link>
                </div>
                <div className="col">
                  <Link href="/">
                    <a className="p-3 d-flex align-items-center justify-content-center">
                      <Image src={ImgFinancialpost} alt="financial_post" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* number section */}
          <div className="container py-5">
            <div className="row align-items-center justify-content-evenly text-center">
              <div className="col">
                <Link href="/">
                  <a className="">
                    <h2 className="font__avenirnextbold">10 minutes</h2>
                    <p>to own your first bitcoin</p>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href="/">
                  <a className="">
                    <h2 className="font__avenirnextbold">$4B+</h2>
                    <p>in digital currency bought & sold</p>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href="/">
                  <a className="">
                    <h2 className="font__avenirnextbold">700,000+</h2>
                    <p>Canadians served</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* features circles */}
          <div className="container">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((i, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center p-4"
                >
                  <div
                    className={
                      styles.featureCircle +
                      " d-flex justify-content-center align-items-center fs-2 rounded-circle"
                    }
                  >
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <br />
                  <div className="fs-5 font__avenirnextbold">
                    Lightning fast
                  </div>
                  <br />
                  <p>
                    Get your personal or business account setup instantly and
                    you will be owning your first bitcoin within minutes
                  </p>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
        </div>
      </MainLayout>
    </>
  );
}
