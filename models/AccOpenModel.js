import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  motherName: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
    match: /^[6-9]\d{9}$/,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  adhaarNo: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{12}$/,
  },
  panNo: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true, match: /^\d{6}$/ },
  },
  accountType: {
    type: String,
    enum: ["Savings", "Current", "Salary", "Fixed Deposit"],
    required: true,
  },
  nominee: {
    name: { type: String },
    relation: { type: String },
    mobileNo: { type: String, match: /^[6-9]\d{9}$/ },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const accountOpenForm = mongoose.model("AccountOpenForm", accountSchema);
module.exports = accountOpenForm;

// EJS (Server-Side Templating)

// EJS is a templating engine used with Express.js.

// Pages are rendered on the server and sent as HTML to the client.

// Useful for simple, small-to-medium apps where you don’t need heavy interactivity.
// Server-side rendering (SSR) only.

// Applications with minimal frontend logic.

// Traditional websites (blogs, admin dashboards, company sites).
