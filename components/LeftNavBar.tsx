import React from "react";
import styles from "../styles/Home.module.css";
import { faBookOpen, faTachometerAlt,faHeart,faCog,faSignOut,faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LeftNavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>StreamLine</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faRocket}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Explore</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Library</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Favourite</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Setting</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faSignOut}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBar;
