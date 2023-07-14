import React from "react";
import IndividualInvoice from "./IndividualInvoice";

export default function Invoices(props) {
  // console.log(props.dataset);

  return (
    <div className="invoices-container">
        <h3>Invoices</h3>
      <div className="card-container">
        {props.dataset.map((invoice) => (
          <IndividualInvoice invoice={invoice} />
        ))}
      </div>
    </div>
  );
}
