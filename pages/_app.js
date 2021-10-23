import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.scss";
import { authContext } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </authContext.Provider>
  );
}

export default MyApp;
