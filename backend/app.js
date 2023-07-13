const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGOURI =
  "mongodb+srv://harshpandit2004:harambedidnothingwrong@technokartbank.lutnaox.mongodb.net/";

const port = 9000;

// CORS middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// MongoDB connection setup
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("DB connected.");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

// Invoice schema and model
const invoiceSchema = new mongoose.Schema({
  invoiceDate: {
    type: Date,
    required: true,
  },
  invoiceNumber: {
    type: String,
    required: true,
  },
  invoiceAmount: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("The server was triggered");
  res.send("Yes, the server was triggered");
});

// Endpoint to handle POST requests for invoices
app.post("/invoices", async (req, res) => {
  const { invoiceDate, invoiceNumber, invoiceAmount } = req.body;

  // Validate the presence of all three parameters
  if (!invoiceDate || !invoiceNumber || !invoiceAmount) {
    return res.status(400).json({ error: "All parameters are required." });
  }

  try {
    // Create a new invoice document
    const invoice = new Invoice({
      invoiceDate,
      invoiceNumber,
      invoiceAmount,
    });

    // Save the invoice to the database
    await invoice.save();

    // Send a response
    res.json({ message: "Invoice processed and saved successfully." });
    console.log(invoice + " processed and saved successfully.");
  } catch (error) {
    console.error("Error saving invoice:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the invoice." });
  }
});

app.listen(port, () => {
  console.log(`Server is live at port ${port}`);
});
