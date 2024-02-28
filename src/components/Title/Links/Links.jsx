import React from "react";
export default function Links({ linkName }) {
  return (
    <button
      className={`btn btn-light btn-sm bg-white mx-3`}
      style={{ color: "#4B5665", fontSize: "13px" }}
    >
      {linkName}
    </button>
  );
}
