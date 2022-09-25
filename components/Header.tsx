import React from "react";
import styles from "../styles/Home.module.css";
import image from "../public/vercel.svg";
const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello<span>Raj</span>
          </h2>
          <p>Welcome to the board</p>
        </div>
      </div>
      <div className={styles.profile}>
        <img src={image} alt="profile" className={styles.profile} />
      </div>
    </div>
  );
};

export default Header;
