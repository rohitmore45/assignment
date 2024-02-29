import React from "react";
import styles from "./Card2.module.css";

export default function Card2() {
  return (
    <div className={`${styles.card2Container}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.cardImg}`}>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            alt="Image"
            height={120}
            width={150}
          />
        </div>
        <div className="mt-3">
          <span className={`${styles.discount} mx-2`}>20% Off</span>
          <span className={`${styles.discount}`}>Limited time</span>
        </div>
        <div>
          <div className={`${styles.builder}`}>Webbuilder1</div>
        </div>

        <div className="mt-1">
          <div className={`${styles.cardDescription}`}>
            Computer Modern classic with wix support
          </div>
        </div>
        <div className="mt-1">
          <span className={`${styles.cardPrice} mx-2`}>$39.96</span>
          <span className={`${styles.cardOriginalPrice}`}>$49.96</span>
          <span className={`${styles.cardDiscount} mx-2`}>(20% off)</span>
        </div>
        <button className={`${styles.cardBtn}`}>View Details</button>
      </div>
    </div>
  );
}
