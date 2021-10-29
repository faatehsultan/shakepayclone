import React, { useContext } from "react";
import styles from "./style.module.scss";
import { Header, Footer } from "../../components";
import { authContext } from "../../contexts/AuthContext";

export default function MainLayout(props) {
  const { user } = useContext(authContext);
  return (
    <div className={styles.MainLayout}>
      {user && (
        <div className="bg-success text-center py-2 text-white fw-bold">
          User Logged in ({user.email})
        </div>
      )}
      <Header {...props} />
      {props.children}
      <Footer {...props} />
    </div>
  );
}
