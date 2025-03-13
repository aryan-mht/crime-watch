const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())
app.get("/", (req, res) => {
    res.send("Server is Running!");
});

const PORT = 5000; // Choose any available port
app.listen(PORT, () => {
    console.log(`🚀 Server Running on http://localhost:${PORT}`);
});
