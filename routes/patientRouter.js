const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Patient = require("../model/patient");

// 몽고 연결
mongoose.connect(
  "mongodb://purpleadmin:purple@localhost:30000/purple-chain",
  (err) => {
    if (err) console.error("mongodb connection error", err);
    else console.log("db connected");
  }
);

// 환자 검색
router.get("/search", (req, res) => {
  console.log(req);
  let search = [];
  if (req.query.name) search.name = req.query.name;

  Patient.find({ ...search }).then((docs) => {
    if (!docs) console.log("error ->", err);
    // console.log(docs);
    res.json(docs);
  });
});

// 테스트
router.get("/test", (req, res) => {
  patient = new Patient({
    name: "이름",
    ssn: "주민등록번호",
    tel: "전화번호",
  });
  patient.save((err) => {
    if (err) console.log(err);
    res.json({ message: "insert" });
  });
});

module.exports = router;
