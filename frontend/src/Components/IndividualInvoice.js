import React from "react";

export default function IndividualInvoice(props) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(props.invoice.invoiceDate);

  const formattedDate =
    date instanceof Date && !isNaN(date)
      ? date.toLocaleDateString(undefined, options)
      : "";

  return (
    <div className="card">
      <div>Invoice Date: {formattedDate}</div>
      <div>Invoice Number: {props.invoice.invoiceNumber}</div>
      <div>Invoice Amount: {props.invoice.invoiceAmount}</div>
      <div>Invoice ID: {props.invoice._id}</div>
      <button onClick={props.deleteInvoiceHandler}>Delete this invoice</button>
    </div>
  );
}
