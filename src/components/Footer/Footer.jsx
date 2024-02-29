import React from "react";
import styles from "./Footer.module.css";
export default function () {
  return (
    <footer className={`${styles.footer}`}>
      <div>
        <ul className={`${styles.list}`}>
          <li className={`${styles.title}`}>CATEGORIES</li>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automationt</li>
        </ul>
      </div>
      <div>
        <ul className={`${styles.list}`}>
          <li className={`${styles.title}`}>CONTACT</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Services</li>
          <li>Categories </li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <ul className={`${styles.list}`}>
          <li>
            United States <span className="bi bi-chevron-down"></span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
