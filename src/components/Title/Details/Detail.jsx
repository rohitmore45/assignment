import React from "react";
import styles from "./Details.module.css";

export default function Detail() {
  return (
    <div className={` ${styles.border}`}>
      <div className={`${styles.date}`}>
        <span className="bi bi-check-circle mx-1"></span>
        <span>Last Updated - February 22, 2020</span>
      </div>
      <div className={`${styles.date} `}>
        <span className="bi bi-info-circle mx-1"></span>
        <span>Advertising Disclosure</span>
      </div>
      <div className={`${styles.date} ${styles.relevantDiv}`}>
        <span>Top Relevant</span>
        <span className="bi bi-chevron-down mx-1"></span>
      </div>
    </div>
  );
}
