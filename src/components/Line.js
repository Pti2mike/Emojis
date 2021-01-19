import React from "react";

const Line = ({ title, symbol }) => {
  return (
    <div>
      <span>{title}</span>
      <span>{symbol}</span>
    </div>
  );
};

export default Line;
