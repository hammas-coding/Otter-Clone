import React from "react";
import styles from "./LoginSignupNavbar.module.css";
import Otter from "../../assets/otter.png";

const LoginSignupNavbar = () => {
  return (
    <div className={styles.navbar}>
      {/* <p>Attendance System</p> */}
      <img src={Otter} alt="otter" style={{ width: "70px" }} />
    </div>
  );
};

export default LoginSignupNavbar;
