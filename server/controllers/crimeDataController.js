const axios = require('axios');
const FormData = require('form-data');
const moment = require('moment');
const {parse} = require("csv-parse");



// category 
/**
 * Crime Against Property: 108
 * Crime Against Person: 107
 * Other Criminal Code Violation: 109
 * Provincial Statute Violation: 110 
 * All: 106  
 */
const getCrimeData = (category) => async (req, res) => {
    try {
        const today = moment().format('YYYY-MM-DD');
        const ninetyDaysAgo = moment().subtract(90, 'days').format('YYYY-MM-DD'); // Fixed format

        const payload = new FormData();
        payload.append("export", 1);
        payload.append("start", ninetyDaysAgo);
        payload.append("end", today);
        payload.append("category", category);

        // Make POST request to police website
        const response = await axios.post("https://map.saskatoonpolice.ca", payload, {
            headers: payload.getHeaders(),
            responseType: "text"
        });

        // parse csv
        parse(response.data, {columns: true, trim: true}, (err, records) => {
            if(err){
                console.error("CSV Parsing Error:", err);
                return res.status(500).json({ error: "Failed to parse CSV" });
            }
            else{
                res.status(200).json(records); 
            }
        })


    } catch (error) {
        console.error("Error fetching crime data:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to fetch crime data" });
    }
};

module.exports = {
    getCrimeData
};
