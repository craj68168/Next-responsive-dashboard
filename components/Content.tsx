import React from "react";
import styles from "../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
const Content = () => {
  //data for bar chart
  const data: any = [
     {name:"Raj",age:25,address:"Ktm"}
    ]

  //doughnut chart data set

  const data1:any = [
    {name:"Nothing",age:0,address:"Somewhere"},{name:"Minni",age:23,address:"Pokhara"}
  ]
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
          {/* <Line data={data} width={400} height={400} /> */}
        </div>
        <div className={styles.bar}>
          <h2>Custom Arrived</h2>
          {/* <Doughnut data={data1} width={400} height={400} /> */}
        </div>
        <div className={styles.bar}>
          <h2>Sales</h2>
          {/* <Line data={data} width={400} height={400} /> */}
        </div>
        <div className={styles.bar}>
          <h2>Custom Arrived</h2>
          {/* <Doughnut data={data1} width={400} height={400} /> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
