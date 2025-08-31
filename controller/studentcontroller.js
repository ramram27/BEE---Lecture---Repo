const StudentInfo = require("../models/StudentInfo");

const postStudents = async (req, res) => {
  try {
    const student = new StudentInfo(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.error("Error createing student:", err.message);
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await StudentInfo.find();
    res.render("students", { students });
    console.log("Students fetched successfully:", students);
    // res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatedStudent = async (req, res) => {
  try {
    const updatedStudent = await StudentInfo.findByIdAndUpdate(
      req.params.rollNum,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.error("Error updating student:", err.message);
  }
};

module.exports = {
  postStudents,
  getStudents,
  updatedStudent,
};
