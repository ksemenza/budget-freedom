import React from "react";
import CashFlowUI from "./components/CashFlowUI";
import "./styles.css";

export default function App(props) {
  console.log(props);
  return (
    <div className="App">
      <CashFlowUI />
    </div>
  );
}
