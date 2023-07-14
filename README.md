# Technokart Assessment

This project is part of the assessment for the position at Technokart. It is a full-stack web application built with React.js for the frontend and Node.js with Express.js for the backend. The application allows users to manage invoices, including creating, updating, and deleting invoices.

## Features

- Add new invoices with invoice date, number, and amount.
- View a list of existing invoices in a grid-like format.
- Edit and update the details of an existing invoice.
- Delete invoices from the system.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB

## Prerequisites

To run this project locally, you need to have the following tools installed:

- Node.js (version >= 12.0.0)
- MongoDB (version >= 4.0.0)

## Getting Started

Follow the instructions below to get started with the project:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

3. Configure the MongoDB connection:

   - Open the `backend/app.js` file.
   - Locate the `MONGOURI` constant and replace it with your MongoDB connection string.

4. Start the backend server:

   ```bash
   cd backend
   node app.js
   ```

5. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and access the application at `http://localhost:3000`.

## API Endpoints

The backend provides the following API endpoints:

- `GET /invoiceGet`: Retrieves a list of all invoices.
- `POST /invoices`: Creates a new invoice.
- `PATCH /invoiceUpdate/:id`: Updates an existing invoice by ID.
- `DELETE /invoiceDelete/:id`: Deletes an invoice by ID.

## Folder Structure

The project's folder structure is as follows:

- `frontend`: Contains the frontend code built with React.js.
- `backend`: Contains the backend code built with Node.js and Express.js.

## Acknowledgements

- The project was developed as part of the assessment for Technokart.
- The frontend is based on React.js and created with the Create React App template.
- The backend uses Node.js and Express.js for the server.

---

README.md Generated my OpenAI's ChatGPT. I had no involvements except a few minor changes.