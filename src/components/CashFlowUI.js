import React, { useState, useEffect } from "react";
import CashFlow from "./CashFlow";
const CashFlowUI = props => {
  const [amtMonth, setAmtMonth] = useState(Number(""));
  const handleChanges = e => {
    setAmtMonth(Number(e.target.value));
    // console.log(amtMonth);
  };
  const submitForm = e => {
    e.preventDefault();
    setAmtMonth(amtMonth);

    //Passed to CashFlow
    console.log("submit " + props);
  };

  useEffect(() => {
    setAmtMonth(amtMonth);
    // console.log("useEff " + amtMonth);
  }, [amtMonth]);

  return (
    <div>
      <CashFlow amtMonth={amtMonth} />

      <form onSubmit={submitForm}>
        <label htmlFor="monthAmt">Amount of Months</label>
        <select
          id="monthAmt"
          type="select"
          name="monthAmt"
          onChange={handleChanges}
          value={props.amtMonth}
        >
          <option value="0">Months</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </form>
    </div>
  );
};

export default CashFlowUI;
