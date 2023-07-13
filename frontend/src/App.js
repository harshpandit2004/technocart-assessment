import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [tempVar, setTempVar] = useState(false);

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // console.log(typeof(e.target.value)); // string
  };
  const numberChangeHandler = (e) => {
    setNumber(parseInt(e.target.value));
    // console.log(typeof(parseInt(e.target.value))); // number
  };
  const amountChangeHandler = (e) => {
    setAmount(parseInt(e.target.value));
    // console.log(typeof(parseInt(e.target.value))); // number
  };

const submitHandler = () => {
  setTempVar(!tempVar);
}

  useEffect(() => {
    console.log("useEffect called");
    if (date !== "" && number !== "" && amount !== "") {
      fetch("http://localhost:9000/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceDate: date,
          invoiceNumber: number,
          invoiceAmount: amount,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }else if(date === "" && number === "" && amount === ""){
      console.log("incorrect or incomplete information")
    }else{
      console.log("this SHOULD never happen")
    }
  }, [tempVar]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="date"
          placeholder="Invoice Date"
          onChange={dateChangeHandler}
          value={date}
        />
        <input
          type="number"
          placeholder="Invoice Number"
          onChange={numberChangeHandler}
          value={number}
        />
        <input
          type="number"
          placeholder="Invoice Amount"
          onChange={amountChangeHandler}
          value={amount}
        />
        <button onClick={submitHandler}>Submit</button>
      </header>
    </div>
  );
}

export default App;
