// Import required modules
const express = require("express");

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for the home page
app.get("/", (req, res) => {
  res.send("Hello, welcome to the simple to-do list application!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
