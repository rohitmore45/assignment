import React from "react";
import styles from "./Deals.module.css";

export default function Deals() {
  return (
    <div className={`${styles.dealsContainer} mt-4`}>
      <div className={`${styles.dealsTitle}`}>
        Sign up and get exclusive special deals
      </div>
      <div className={`${styles.dealsInput}`}>
        <div className=" input-group">
          <input type="text" className="form-control" />
          <button className="input-group-text">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
