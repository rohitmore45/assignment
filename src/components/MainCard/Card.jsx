import React from "react";
import styles from "./Card.module.css";

export default function Card({ data }) {
  console.log(data);
  return (
    <div className={`${styles.mainContainer}`}>
      <div>
        {data.choice && (
          <span className={`${styles.choice}`}>{data.choice}</span>
        )}

        <div
          style={{
            backgroundImage: `url(${data.img})`,
            height: "150px",
            width: "200px",
            backgroundSize: "cover",
          }}
        >
          <span className={`${styles.dataId} `}>{data.id}</span>
        </div>
        <p className={`${styles.name} mt-1`}>{data.name}</p>
      </div>
      <div className="px-4">
        <span className={`${styles.title}`}>{data.title}</span>
        <span className={`${styles.description}`}>{data.description}</span>
        <p className={`${styles.title} mt-2`}>Main highlights</p>
        {data.feature1 && (
          <div>
            <div className={`${styles.feature}`}>
              <div>9.9 {data.feature1}</div>
              <div>8.8 {data.feature2}</div>
              <div>8.8 {data.feature3}</div>
            </div>
            <div className={`${styles.feature2} mt-3`}>
              <div className=" mb-2 ">Why we love it?</div>
              <div className="bi bi-check-circle-fill"> Documentation</div>
              <div className="bi bi-check-circle-fill"> Easy Use</div>
              <div className="bi bi-check-circle-fill"> Out of Box</div>
            </div>
          </div>
        )}
        <p className={`${styles.description}`}>{data.highlight}</p>
        <p>
          <a href="#">
            see more <span className="bi bi-chevron-down"></span>
          </a>
        </p>
      </div>
      <div>
        <div className={`${styles.ratingContainer}`}>
          <div className={`${styles.rating}`}>{data.rating}</div>
          <div className={`${styles.status}`}>{data.status}</div>
          <div style={{ fontSize: "10px" }} className="mt-1">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
        <button className={styles.viewBtn}>View</button>
      </div>
    </div>
  );
}
