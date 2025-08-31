const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNum: {
    type: Number,
    required: [true, "roll num is required"],
    unique: [true, "duplicate value"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [2, "min length 2 char"],
  },
  course: {
    type: String,
    required: [true, "course is required"],
  },
  emailId: {
    type: String,
    required: [true, "email id is required"],
    unique: true,
  },
});

const studentinfo = mongoose.model("StudentInfo", studentSchema);
module.exports = studentinfo;
// MySQL               MongoDB
// Table               Collection
// Row                 Document
// Data Structure
// Data is stored in tables with fixed columns (like a spreadsheet).(MySQL)
// Data is stored in documents (like JSON objects), which can vary.
// Documents can have different structures, allowing for more flexibility. (MongoDB)
// Relationships
// Relationships are defined using foreign keys and joins.
// Relationships are handled using embedded documents or references.
//String,required: [true, 'Email is required'],lowercase: true,
// Data Types
// MySQL has predefined data types (e.g., INT, VARCHAR, DATE).
// MongoDB uses BSON (Binary JSON) format, which supports various data types like strings, numbers, arrays, and objects.
// Query Language
// SQL (Structured Query Language) is used to query data.
// MongoDB uses its own query language, which is more flexible and JSON-like.

// Schema
// MySQL requires a predefined schema with fixed data types for each column.
// MongoDB is schema-less, allowing for dynamic and flexible data structures.

// Transactions
// MySQL supports transactions, allowing multiple operations to be executed as a single unit.
// MongoDB supports transactions as well, but they are more complex and less commonly used.

// Scalability
// MySQL is vertically scalable, meaning you can scale by upgrading hardware.
// MongoDB is horizontally scalable, meaning you can add more servers to handle increased load.

// Performance
// MySQL is optimized for complex queries and joins, making it suitable for structured data.
// MongoDB is optimized for high write and read performance, especially with large volumes of unstructured data.

// Use Cases
// MySQL is often used for structured data with complex relationships, like financial systems.
// MongoDB is often used for unstructured or semi-structured data, like content management systems or real-time analytics.
// MongoDB
// MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
// It allows for dynamic schemas, meaning you can store different fields in different documents within the same

// collection.
// This flexibility makes MongoDB suitable for applications with evolving data structures or when you need to handle large volumes of unstructured data.
// MongoDB is often used in scenarios where data relationships are not as rigid as in traditional relational databases like MySQL.
// It is particularly useful for applications that require high scalability, real-time analytics, or content management systems.
// MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
// It allows for dynamic schemas, meaning you can store different fields in different documents within the same
//MySQL (e.g., PayPal, Uber, or Airbnb)
// MySQL (PayPal, Uber, Airbnb): Chosen for structured, transactional data requiring ACID compliance and complex
// JOINs (e.g., financial records, ride histories).
// MongoDB (eBay, Lyft, Expedia): Chosen for unstructured or semi-structured data, high scalability, and flexibility
// in dynamic, high-traffic apps (e.g., product catalogs,
//   real-time rides, travel listings).
//MongoDB in Ride-Sharing Apps (Ola, Uber, Rapido)
// db.rides.insertOne({
//   ride_id: "RPD123",
//   rider: { name: "Amit", user_id: "U303" },
//   driver: { name: "Vikram", driver_id: "D404", vehicle: "bike" },
//   location: { type: "Point", coordinates: [72.8777, 19.076] },
//   status: "active",
//   fare: 30.0,
// });

// mongodb installation =>
// Mongodb Compass => https://www.mongodb.com/try/download/community
// Mongodb shell => https://www.mongodb.com/try/download/shell
// git install => https://git-scm.com/downloads
// click vs code file => prefrence => settings => check marks

// Mac
// step 1 Install Homebrew
// /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
// brew --version
// step 2
// brew install git
// git --version

// Mongoose
// 🔹 What it is:
// mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

// 🔹 Why use it:

// Simplifies database interactions with MongoDB

// Allows defining schemas and models

// Provides built-in validation, middleware, and query helpers

// 🔧 Example Use Case:
// Instead of writing raw MongoDB queries, you define a model:

// const Product = mongoose.model("Product", {
//   name: String,
//   price: Number,
// });
// Then use it easily:

// await Product.create({ name: "Laptop", price: 50000 });
// ✅ Benefits:

// Structure your data using schemas

// Easily perform CRUD operations

// Supports middleware (e.g., pre-save hooks)

// Cleaner and more maintainable code

// 2️⃣ CORS (Cross-Origin Resource Sharing)
// cors is a Node.js middleware that allows your backend to handle requests from different origins (domains, ports, etc.).

// 🔹 Why use it:

// Browsers block requests between different origins (like from localhost:3000 to localhost:5000)

// cors lets you enable access for your frontend to talk to your backend

// 🧠 Without CORS:
// You’d get an error like:
// Access to fetch at 'http://localhost:5000/api' from origin 'http://localhost:3000' has been blocked by CORS policy
// ✅ With CORS:
// You allow cross-origin requests:

// const cors = require("cors");
// app.use(cors()); // allows all origins
// You can also allow only specific origins:

// app.use(cors({ origin: "http://localhost:3000" }));
