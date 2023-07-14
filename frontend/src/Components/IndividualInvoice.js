import React from "react";

export default function IndividualInvoice(props) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(props.invoice.invoiceDate);

  // console.log("Original date:", props.invoice.invoiceDate);
  // console.log("Parsed date object:", date);

  // Check if the date is valid before formatting
  const formattedDate =
    date instanceof Date && !isNaN(date)
      ? date.toLocaleDateString(undefined, options)
      : "";

  // console.log("Formatted date:", formattedDate);

  return (
    <div key={props.invoice._id} className="card">
      <div>Invoice Date: {formattedDate}</div>
      <div>Invoice Number: {props.invoice.invoiceNumber}</div>
      <div>Invoice Amount: {props.invoice.invoiceAmount}</div>
      <div>Invoice ID: {props.invoice._id}</div>
    </div>
  );
}
