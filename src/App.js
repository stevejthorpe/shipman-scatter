import React, { Component } from "react";
import "./styles.css";
import { csvParse } from "d3-dsv";

import shipmanData from "./data/shipman-confirmed-victims-x.csv";
import Legend from "./legend";
import { XYFrame } from "semiotic";
import { typeColors } from "./settings/color.js";
import ScatterPlot from "./scatterPlot";
// console.log("shipmanData", shipmanData);

const parsedEdges = csvParse(shipmanData);

export default function App() {
  return (
    <div className="App">
      <h1>Harold Shipman's Confirmed Victims</h1>
      <h2>
        A scatter-plot showing that age and year of death of Shipman's victims
      </h2>
      <p>
        A reconstruction of the chart in Davis Spiegelhalter's{" "}
        <em>The Art of Statistics</em> using d3.js/Semiotic. Dataset available
        at{" "}
        <a href="https://dspiegel29.github.io/ArtofStatistics/00-1-age-and-year-of-deathofharold-shipmans-victims/00-1-shipman-confirmed-victims-x.csv">
          GitHub
        </a>
      </p>
      <div className="row">
        <Legend color={typeColors} />
      </div>
      <div className="box">
        <ScatterPlot data={parsedEdges} color={typeColors} />
      </div>
    </div>
  );
}
