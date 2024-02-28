import React from "react";

export default function BreadCrumb({ name }) {
  return (
    <div style={{ fontFamily: "Inter", fontSize: "12px", color: "#5C6874" }}>
      <span>{name}</span>
      <span className="bi bi-chevron-right mx-2"></span>
    </div>
  );
}
