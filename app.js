import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Sample variables
const a = 20;
const b = 12;

// Routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running successfully",
    result: a + b
  });
});

// Port
const PORT = 3002;

// Start server
app.listen(PORT, () => {
  console.group("Server Info:");
  console.log(`🚀 Server started and running on port ${PORT}`);
  console.log(`🌐 Access the server at: http://localhost:${PORT}`);
  console.groupEnd();
});
