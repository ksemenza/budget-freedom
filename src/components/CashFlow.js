import React from "react";
//***Alogrthim For Array Of Spare Month Income */

const CashFlow = props => {
  //To-do replace hard coding with income total (income - expenses)
  let spareIncome = 20000;

  //To-do replace hard coding with select input var
  let monthAmtSelect = props.amtMonth;
  console.log("montAmtSel " + monthAmtSelect);

  //Creates Arr of  Monthly Spare Income
  let incomeArr = Array(props.amtMonth).fill(spareIncome);
  console.log("incomeArr " + incomeArr);
  let i = 1;

  let tally = incomeArr.map(x => x * i++);
  console.log("tally array " + tally);

  return <div>{tally}</div>;
};

export default CashFlow;
