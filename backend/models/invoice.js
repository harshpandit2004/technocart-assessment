// models/invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceDate: {
    type: Date,
    required: true
  },
  invoiceNumber: {
    type: String,
    required: true
  },
  invoiceAmount: {
    type: Number,
    required: true
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
