const express = require("express")

const {
    getAllData
} = require("../controllers/crimeDataController")

const router = express.Router();

router.get("/getAll", getAllData);

module.exports = router