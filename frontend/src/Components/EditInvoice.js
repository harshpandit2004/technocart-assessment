import React from "react";

export default function EditInvoice(props) {
  return (
    <div className="EditInvoice">
      <h3>Edit Invoice</h3>
      <input
        type="text"
        placeholder="ID of the invoice to be updated"
        onChange={props.idChangeHandler}
        value={props.id}
      />
        <br/>
      <input
        type="date"
        placeholder="New Invoice Date"
        onChange={props.updatedDateChangeHandler}
        value={props.updatedDate}
      />
      <input
        type="number"
        placeholder="New Invoice Number"
        onChange={props.updatedNumberChangeHandler}
        value={props.updatedNumber}
      />
      <input
        type="number"
        placeholder="New Invoice Amount"
        onChange={props.updatedAmountChangeHandler}
        value={props.updatedAmount}
      />
      <button onClick={props.updateSubmitHandler} className="EditInvoiceSubmit">
        Submit
      </button>
    </div>
  );
}
