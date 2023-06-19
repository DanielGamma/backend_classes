require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;

const router = require("./routes/routes");

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});