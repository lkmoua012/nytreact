import React from "react";

const SearchButton = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg", `btn-${type}`, className].join(" ")}
  >
    {children}
  </button>
);

export default SearchButton;
