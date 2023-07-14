import "./App.css";
import React, { useEffect, useState } from "react";
import AddInvoice from "./Components/AddInvoice";
import Invoices from "./Components/Invoices";
import EditInvoice from "./Components/EditInvoice";

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

  const [id, setId] = useState("");
  const [updatedDate, setUpdatdeDate] = useState("");
  const [updatedNumber, setUpdatedNumber] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");

  const [updateTempVar, setUpdateTempVar] = useState(false);

  const updateSubmitHandler = () => {
    setUpdateTempVar(!updateTempVar);
  };
  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const updatedDateChangeHandler = (e) => {
    setUpdatdeDate(e.target.value);
  };
  const updatedNumberChangeHandler = (e) => {
    setUpdatedNumber(parseInt(e.target.value));
  };
  const updatedAmountChangeHandler = (e) => {
    setUpdatedAmount(parseInt(e.target.value));
  };

  useEffect(() => {
    console.log("useEffect called");

    fetch("http://localhost:9000/invoiceGet")
      .then((res) => res.json())
      .then((data) => setDataset(data))
      .catch((err) => console.log(err));

    if (updatedDate !== "" && updatedNumber !== "" && updatedAmount !== "") {
      fetch("http://localhost:9000/invoiceUpdate/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceDate: updatedDate,
          invoiceNumber: updatedNumber,
          invoiceAmount: updatedAmount,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log("Invoice updated successfully:", data);
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error updating invoice:", error);
        });
    }

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
  }, [tempVar, updateTempVar]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="manipulation">
          <AddInvoice
            date={date}
            number={number}
            amount={amount}
            dateChangeHandler={dateChangeHandler}
            numberChangeHandler={numberChangeHandler}
            amountChangeHandler={amountChangeHandler}
            submitHandler={submitHandler}
          />
          <EditInvoice
            id={id}
            updatedDate={updatedDate}
            updatedNumber={updatedNumber}
            updatedAmount={updatedAmount}
            idChangeHandler={idChangeHandler}
            updatedDateChangeHandler={updatedDateChangeHandler}
            updatedNumberChangeHandler={updatedNumberChangeHandler}
            updatedAmountChangeHandler={updatedAmountChangeHandler}
            updateSubmitHandler={updateSubmitHandler}
          />
        </div>
        <Invoices dataset={dataset} />
      </header>
    </div>
  );
}

export default App;
