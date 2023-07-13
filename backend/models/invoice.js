// models/invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceDate: {
    type: Date,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  invoiceAmount: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;

// bug probably sucks because the invoicenumber value is getting stored as an integer. try to reset the values/schema and store again.
//probable solution to the bug - split the date and then compare indivisualised values in a nested contitional statement. 
