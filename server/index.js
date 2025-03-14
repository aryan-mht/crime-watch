const express = require("express");
const cors = require("cors");
const crimeDataRoutes = require("./routes/crimeDataRoutes")


const app = express();

app.use(cors());
app.use(express.json())

// Routes
app.use("/data", crimeDataRoutes) 

app.get("/", (req, res) => {
    res.send("Server is Running!");
});

// Check if the environment is local or production
const port = process.env.PORT || 5000;  // Use 5000 locally, or the dynamic Vercel-assigned port in production

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
