import "./App.css";
import React, { useEffect, useState } from "react";
import AddInvoice from "./Components/AddInvoice";
import Invoices from "./Components/Invoices";
import EditInvoice from "./Components/EditInvoice";

function App() {
  //for viewing existing invoices
  const [dataset, setDataset] = useState([]);

  //for building new invoices
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

  //for editing already existing invoices
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

  //for deleting already existing invoices

  const deleteInvoiceHandler = (id) => {
    fetch(`https://poised-jade-crane.cyclic.app/invoiceDelete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Invoice deleted successfully:", data);
        // Remove the deleted invoice from the dataset
        setDataset(dataset.filter((invoice) => invoice._id !== id));
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error deleting invoice:", error);
        alert("Error deleting invoice. Please try again later.");
      });
  };

  useEffect(() => {
    console.log("useEffect called");

    fetch("https://poised-jade-crane.cyclic.app/invoiceGet")
      .then((res) => res.json())
      .then((data) => setDataset(data))
      .catch((err) => console.log(err));

    if (updatedDate !== "" && updatedNumber !== "" && updatedAmount !== "") {
      fetch("https://poised-jade-crane.cyclic.app/invoiceUpdate/" + id, {
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
          alert("Error updating invoice. Please try again later.");
        });
    }

    if (date !== "" && number !== "" && amount !== "") {
      fetch("https://poised-jade-crane.cyclic.app/invoices", {
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
        .catch((err) => {
          console.log(err);
          alert(err);
        });
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
        <Invoices
          dataset={dataset}
          deleteInvoiceHandler={deleteInvoiceHandler}
        />
      </header>
    </div>
  );
}

export default App;
