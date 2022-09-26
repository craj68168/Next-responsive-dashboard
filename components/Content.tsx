import React from "react";
import styles from "../styles/Home.module.css";
const Content = () => {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Content</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Company</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>User</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Projects</h2>
          </div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Sales</h2>
        </div>
        <div className={styles.circle}>
          <h2>Custom Arrived</h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
