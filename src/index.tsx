import React from "react";
import ReactDOM from "react-dom";

import VirtualizedList from "./components/VirtualizedList";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1>React Virtualization Demo</h1>
      <a href="https://funny-tree-005.notion.site/VIRTUALIZATION-031a59bbbdd5417f85422f78aa847a1d">
        https://funny-tree-005.notion.site/VIRTUALIZATION-031a59bbbdd5417f85422f78aa847a1d
      </a>
      <br />
      <br />
      <VirtualizedList />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
