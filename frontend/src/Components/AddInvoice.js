import React from "react";

export default function AddInvoice(props) {
  return (
    <div className="AddInvoice">
        <h3>Add Invoice</h3>
      <input
        type="date"
        placeholder="Invoice Date"
        onChange={props.dateChangeHandler}
        value={props.date}
      />
      <input
        type="number"
        placeholder="Invoice Number"
        onChange={props.numberChangeHandler}
        value={props.number}
      />
      <input
        type="number"
        placeholder="Invoice Amount"
        onChange={props.amountChangeHandler}
        value={props.amount}
      />
      <button onClick={props.submitHandler} className="AddInvoiceSubmit">Submit</button>
    </div>
  );
}
