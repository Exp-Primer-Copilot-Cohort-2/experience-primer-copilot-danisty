// Create web server
const express = require("express");
const app = express();
app.use(express.json());

// In-memory data store
const comments = [];

// Create a new comment
app.post("/comments", (req, res) => {
  const { author, content } = req.body;
  comments.push({ author, content });
  res.status(201).send();
});

// Get all comments
app.get("/comments", (req, res) => {
  res.send(comments);
});

// Start server
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});