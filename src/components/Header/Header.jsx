import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={`${styles.navbar} text-white `}>
        <div className="d-flex align-items-center justify-content-evenly">
          <div className={`input-group w-25`}>
            <span className={`bi bi-search input-group-text ${styles.span}`}></span>{" "}
            <input className={`${styles.input}`} type="text" />
          </div>
          <div>
            <p>Categories</p>
          </div>
          <div>
            <p>Website Builders</p>
          </div>
          <div>
            <p>Today's Deals</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
