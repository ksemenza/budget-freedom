import React from "react";
//***Alogrthim For Array Of Spare Month Income */

const CashFlow = props => {
  //To-do replace hard coding with income total (income - expenses)
  let spareIncome = props.incomeInput;
  // console.log("income: " + props.incomeInput);

  //props passes obj initial state amtMonth: 0
  let monthAmtSelect = props.amtMonth;
  console.log("montAmtSel " + monthAmtSelect);
  console.log(props.amtMonth);

  //Creates Arr of  Monthly Spare Income
  let incomeArr = Array(props.amtMonth).fill(spareIncome);
  console.log("incomeArr " + incomeArr);
  let i = 0;
  let j = i++;

  let tally = incomeArr.map(x => x * i++);
  console.log("tally array " + tally);

  //MAP
  return tally.map(item => {
    console.log("tally " + tally);
    return (
      <div style={{ width: `50rem`, margin: `0 auto`, paddingLeft: `4.0rem` }}>
        {/**Renders incomeArr into li*/}

        <li
          style={{
            paddingRight: "55px",
            listStyle: "none"
          }}
          key={j}
        >
          <h4>${tally[j++]}</h4>
        </li>
      </div>
    );
  });
};

export default CashFlow;
