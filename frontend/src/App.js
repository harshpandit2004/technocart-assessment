import "./App.css";
import React, { useEffect, useState } from "react";
import AddInvoice from "./Components/AddInvoice";
import Invoices from "./Components/Invoices";

function App() {
  const [dataset, setDataset] = useState([]);

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
  };

  useEffect(() => {
    console.log("useEffect called");

    fetch("http://localhost:9000/invoiceGet")
      .then((res) => res.json())
      .then((data) => setDataset(data))
      .catch((err) => console.log(err));

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
    } else if (date === "" && number === "" && amount === "") {
      console.log("incorrect or incomplete information");
    } else {
      console.log("this SHOULD never happen");
    }
  }, [tempVar]);

  return (
    <div className="App">
      <header className="App-header">
        <AddInvoice
          date={date}
          number={number}
          amount={amount}
          dateChangeHandler={dateChangeHandler}
          numberChangeHandler={numberChangeHandler}
          amountChangeHandler={amountChangeHandler}
          submitHandler={submitHandler}
        />
        <Invoices dataset={dataset} />
      </header>
    </div>
  );
}

export default App;
