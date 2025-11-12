const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve frontend files
app.use(express.static(path.join(__dirname, "Frontend")));

// Serve static images inside Frontend/images
app.use("/images", express.static(path.join(__dirname, "Frontend/images")));

// Routes
const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use("/api", userRoutes);            // Register/Login
app.use("/api/rooms", roomRoutes);      // Rooms
app.use("/api/bookings", bookingRoutes);// Bookings
app.use("/api/profile", profileRoutes); // Profile update/fetch

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ramya_residency")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Start Server
app.listen(5000, () => {
  console.log("✅ Server Running on http://localhost:5000");
});
