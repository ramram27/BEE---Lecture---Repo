const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentcontroller");

router.post("/students", studentController.postStudents);

router.get("/get-students", studentController.getStudents);

router.put("/students/:rollNum", studentController.updatedStudent);

module.exports = router;
