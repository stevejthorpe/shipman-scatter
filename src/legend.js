import React from "react";

export default props => {
  const { color } = props;

  const types = Object.keys(color);
  const legendItems = types.map(d => (
    <span
      key={`legend-item-{d}`}
      style={{ display: "inline-block", width: "10%" }}
    >
      <span
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          background: color[d]
        }}
      />{" "}
      {d}
    </span>
  ));
  return <div style={{ textAlign: "left " }}>{legendItems}</div>;
};
