import React from "react";
import { XYFrame } from "semiotic";

export default props => (
  <div>
    <XYFrame
      points={props.data}
      size={[750, 500]}
      xAccessor={d => d.yearOfDeath}
      yAccessor={d => d.Age}
      xExtent={[1974, 2000]}
      yExtent={[35, 100]}
      pointStyle={d => ({
        r: 3,
        stroke: "black",
        fill: d.gender === "0" ? "#E16554" : "#73D9E5"
      })}
      axes={[
        {
          orient: "top",
          marginalSummaryType: {
            type: "histogram",
            orient: "top",
            summaryStyle: {
              fill: "#85d2e1",
              fillOpacity: 0.5,
              stroke: "#1f9383"
            }
          }
        },
        {
          orient: "right",
          marginalSummaryType: {
            type: "histogram",
            orient: "right",
            summaryStyle: {
              fill: "#85d2e1",
              fillOpacity: 0.5,
              stroke: "#1f9383"
            }
          }
        },
        { orient: "left", label: "Age of victime" },
        { orient: "bottom", label: "Year" }
      ]}
      hoverAnnotation={true}
      tooltipContent={d => (
        <div className="tooltip-content">
          <p>Age Group: {d.ageBracket}</p>
          <p>Gender: {d.gender2}</p>
          <p>Date of Death: {d.DateofDeath}</p>
          <p>Place of Death: {d.PlaceofDeath}</p>
        </div>
      )}
      margin={{ left: 60, right: 55, top: 50, bottom: 75 }}
    />
  </div>
);
