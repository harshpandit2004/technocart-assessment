import React from "react";

export default function IndividualInvoice(props) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(props.invoice.invoiceDate);

  const formattedDate =
    date instanceof Date && !isNaN(date)
      ? date.toLocaleDateString(undefined, options)
      : "";

  return (
    <tr className="individualInvoice">
      <td>{formattedDate}</td>
      <td>{props.invoice.invoiceNumber}</td>
      <td>{props.invoice.invoiceAmount}</td>
      <td>{props.invoice._id}</td>
      <td>
        <button onClick={() => props.deleteInvoiceHandler(props.invoice._id)}>Delete this invoice</button>
      </td>
    </tr>
  );
}
