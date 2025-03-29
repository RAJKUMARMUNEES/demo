const express = require("express");

const app = express();
const PORT = 7000;


// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("Hi All , Good Morning, welcome to HCL  \n This is second step for AWS CICD...");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
