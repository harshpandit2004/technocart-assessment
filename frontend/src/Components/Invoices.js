import React from "react";
import IndividualInvoice from "./IndividualInvoice";

export default function Invoices(props) {
  return (
    <div className="invoices-container">
      <h3>Invoices</h3>
      <div className="card-container">
        {props.dataset.map((invoice) => (
          <IndividualInvoice
            key={invoice._id}
            invoice={invoice}
            deleteInvoiceHandler={() => props.deleteInvoiceHandler(invoice._id)}
          />
        ))}
      </div>
    </div>
  );
}
