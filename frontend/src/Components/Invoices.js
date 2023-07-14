import React from 'react'

export default function Invoices(props) {
  
    console.log(props.dataset)
  
    return (
    <div>
      <div className="grid-container">
      {props.dataset.map((invoice) => (
        <div key={invoice._id} className="card">
          <br/>
          <div>Invoice Date: {invoice.invoiceDate}</div>
          <div>Invoice Number: {invoice.invoiceNumber}</div>
          <div>Invoice Amount: {invoice.invoiceAmount}</div>
        </div>
      ))}
    </div>
    </div>
  )
}
