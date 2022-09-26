import React from "react";
import styles from "../styles/Home.module.css";
import image from "../public/favicon.ico";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello <span>Raj</span>
          </h2>
          <p>Welcome to the board</p>
        </div>
      </div>
      <div className={styles.profile}>
        <Image src={image} width={40} height={40} />
      </div>
    </div>
  );
};

export default Header;
