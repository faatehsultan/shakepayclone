import React from "react";
import styles from "./style.module.scss";
import { Header, Footer } from "../../components";

export default function MainLayout(props) {
  return (
    <div className={styles.MainLayout}>
      <Header {...props} />
      {props.children}
      <Footer {...props} />
    </div>
  );
}
