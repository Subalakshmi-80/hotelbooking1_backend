// seedRooms.js
const mongoose = require("mongoose");
const Room = require("./models/room"); // make sure path is correct

mongoose.connect("mongodb://127.0.0.1:27017/ramya_residency", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const rooms = [
  { type: "single", price: 500, available: 1, image: "singleroom.jpg", description: "Cozy room for one" },
  { type: "double", price: 700, available: 5, image: "double.jpg", description: "Comfortable for two" },
  { type: "family", price: 1200, available: 3, image: "family.jpg", description: "Spacious for family" },
  { type: "deluxe", price: 1400, available: 2, image: "banner.jpg", description: "Upgraded comforts" },
  { type: "suite", price: 2200, available: 1, image: "banner.jpg", description: "Luxurious suite" },
  { type: "studio", price: 900, available: 4, image: "singleroom.jpg", description: "Compact studio layout" },
  { type: "executive", price: 3000, available: 1, image: "banner.jpg", description: "For business travellers" },
  { type: "economy", price: 350, available: 10, image: "singleroom.jpg", description: "Budget friendly" },
  { type: "twin", price: 800, available: 2, image: "double.jpg", description: "Two single beds" },
  { type: "triple", price: 1300, available: 1, image: "family.jpg", description: "Room for three" },
  { type: "connecting", price: 1600, available: 2, image: "banner.jpg", description: "Adjoining rooms" },
  { type: "accessible", price: 950, available: 1, image: "singleroom.jpg", description: "Accessible facilities" },
  { type: "penthouse", price: 5000, available: 0, image: "banner.jpg", description: "Top-floor luxury" },
  { type: "honeymoon", price: 3500, available: 0, image: "family.jpg", description: "Romantic retreat" },
  { type: "apartment", price: 2600, available: 1, image: "banner.jpg", description: "Long-stay comforts" },
];

async function seed() {
  try {
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    console.log("✅ Rooms added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.log("❌ Error:", error);
  }
}

seed();
