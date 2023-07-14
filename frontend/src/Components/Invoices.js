import React, { useState } from "react";
import IndividualInvoice from "./IndividualInvoice";

export default function Invoices(props) {
  const [filterYear, setFilterYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterYearChange = (e) => {
    setFilterYear(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInvoices = props.dataset.filter((invoice) => {
    // Filter by financial year
    if (filterYear && invoice.invoiceDate) {
      const year = new Date(invoice.invoiceDate).getFullYear();
      return year === Number(filterYear);
    }

    // Filter by search term (invoice number)
    if (searchTerm && invoice.invoiceNumber) {
      return invoice.invoiceNumber.toString().includes(searchTerm);
    }

    return true; // Return all invoices if no filters applied
  });

  return (
    <div className="invoices-container">
      <h3>Invoices</h3>
      <div className="filter-search-container">
        <div className="filter-container">
          <label>Filter by Financial Year:</label>
          <select value={filterYear} onChange={handleFilterYearChange}>
            <option value="">All</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more options for other years */}
          </select>
        </div>
        <div className="search-container">
          <label>Search by Invoice Number:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <br/>
      <br/>
      <table className="invoiceTable">
        <thead>
          <tr>
            <td>Date</td>
            <td>Number</td>
            <td>Amount</td>
            <td>ID</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody >
          {filteredInvoices.map((invoice) => (
            <IndividualInvoice
              key={invoice._id}
              invoice={invoice}
              deleteInvoiceHandler={props.deleteInvoiceHandler}
              className="individualInvoice"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
