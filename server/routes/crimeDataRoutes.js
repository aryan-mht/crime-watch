const express = require("express")

const {
    getCrimeData
} = require("../controllers/crimeDataController")

const router = express.Router();

// initializing categories for different types of crime
const CRIME_PROP = 108;
const CRIME_PERS = 107;
const CRIME_OTHER = 109;
const CRIME_PROV = 110;

router.get("/crime-property", getCrimeData(CRIME_PROP));
router.get("/crime-person", getCrimeData(CRIME_PERS));
router.get("/crime-other", getCrimeData(CRIME_OTHER));
router.get("/crime-provincial", getCrimeData(CRIME_PROV));

module.exports = router