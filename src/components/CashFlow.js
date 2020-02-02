import React from "react";
//***Alogrthim For Array Of Spare Month Income */

const CashFlow = props => {
  //To-do replace hard coding with income total (income - expenses)
  let spareIncome = 20000;

  //To-do replace hard coding with select input var
  let monthAmtSelect = props.amtMonth;

  //Creates Arr of  Monthly Spare Income
  let incomeArr = Array(props.amtMonth).fill(spareIncome);
  // console.log(incomeArr);
  //Empty Arr for Spare Income Arr
  const incomeTallyArr = [];
  //Mutiplying Month amt by Income
  for (let i = 0; i < monthAmtSelect; i++)
    //NEW Spare Income Tally
    incomeTallyArr.push(incomeArr[i] * i);
  console.log(incomeTallyArr);

  return <div>CasH Flow</div>;
};

export default CashFlow;
