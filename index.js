const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const accountRoutes = require("./routes/accRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(
    "mongodb+srv://rohit123:mn%40%40%24db@cluster0.lstnt4r.mongodb.net/studentinfo?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.error("Full error:", err);
  });
app.set("view engine", "ejs");
app.use(express.json());
app.use("/api", studentRoutes);
app.use("/apiAcc", accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
