const express = require("express");
const router = express.Router();

const { getAllStudents, getStudentByName, createStudent } = require("../controllers/controllers");

router.get("/", getAllStudents);

router.post("/", createStudent);

module.exports = router;